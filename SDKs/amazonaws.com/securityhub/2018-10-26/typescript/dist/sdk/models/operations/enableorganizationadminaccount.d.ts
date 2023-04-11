import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnableOrganizationAdminAccountRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Web Services account identifier of the account to designate as the Security Hub administrator account.
     */
    adminAccountId: string;
}
export declare class EnableOrganizationAdminAccountRequest extends SpeakeasyBase {
    requestBody: EnableOrganizationAdminAccountRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EnableOrganizationAdminAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    enableOrganizationAdminAccountResponse?: Record<string, any>;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
