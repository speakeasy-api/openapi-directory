import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The classification for application component types.
 */
export declare enum PutPortfolioPreferencesRequestBodyApplicationModeEnum {
    All = "ALL",
    Known = "KNOWN",
    Unknown = "UNKNOWN"
}
/**
 *  Application preferences that you specify.
 */
export declare class PutPortfolioPreferencesRequestBodyApplicationPreferences extends SpeakeasyBase {
    managementPreference?: shared.ManagementPreference;
}
/**
 *  Preferences on managing your databases on AWS.
 */
export declare class PutPortfolioPreferencesRequestBodyDatabasePreferences extends SpeakeasyBase {
    databaseManagementPreference?: shared.DatabaseManagementPreferenceEnum;
    databaseMigrationPreference?: shared.DatabaseMigrationPreference;
}
/**
 *  Rank of business goals based on priority.
 */
export declare class PutPortfolioPreferencesRequestBodyPrioritizeBusinessGoals extends SpeakeasyBase {
    businessGoals?: shared.BusinessGoals;
}
export declare class PutPortfolioPreferencesRequestBody extends SpeakeasyBase {
    /**
     * The classification for application component types.
     */
    applicationMode?: PutPortfolioPreferencesRequestBodyApplicationModeEnum;
    /**
     *  Application preferences that you specify.
     */
    applicationPreferences?: PutPortfolioPreferencesRequestBodyApplicationPreferences;
    /**
     *  Preferences on managing your databases on AWS.
     */
    databasePreferences?: PutPortfolioPreferencesRequestBodyDatabasePreferences;
    /**
     *  Rank of business goals based on priority.
     */
    prioritizeBusinessGoals?: PutPortfolioPreferencesRequestBodyPrioritizeBusinessGoals;
}
export declare class PutPortfolioPreferencesRequest extends SpeakeasyBase {
    requestBody: PutPortfolioPreferencesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutPortfolioPreferencesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putPortfolioPreferencesResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
