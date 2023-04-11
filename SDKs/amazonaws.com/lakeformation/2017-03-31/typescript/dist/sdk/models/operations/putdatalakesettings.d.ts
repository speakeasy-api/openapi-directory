import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
 */
export declare class PutDataLakeSettingsRequestBodyDataLakeSettings extends SpeakeasyBase {
    allowExternalDataFiltering?: boolean;
    authorizedSessionTagValueList?: string[];
    createDatabaseDefaultPermissions?: shared.PrincipalPermissions[];
    createTableDefaultPermissions?: shared.PrincipalPermissions[];
    dataLakeAdmins?: shared.DataLakePrincipal[];
    externalDataFilteringAllowList?: shared.DataLakePrincipal[];
    parameters?: Record<string, string>;
    trustedResourceOwners?: string[];
}
export declare class PutDataLakeSettingsRequestBody extends SpeakeasyBase {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    catalogId?: string;
    /**
     * A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
     */
    dataLakeSettings: PutDataLakeSettingsRequestBodyDataLakeSettings;
}
export declare class PutDataLakeSettingsRequest extends SpeakeasyBase {
    requestBody: PutDataLakeSettingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutDataLakeSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    putDataLakeSettingsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
