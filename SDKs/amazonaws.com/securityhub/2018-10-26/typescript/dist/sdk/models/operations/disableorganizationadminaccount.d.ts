import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisableOrganizationAdminAccountRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Web Services account identifier of the Security Hub administrator account.
     */
    adminAccountId: string;
}
export declare class DisableOrganizationAdminAccountRequest extends SpeakeasyBase {
    requestBody: DisableOrganizationAdminAccountRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisableOrganizationAdminAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disableOrganizationAdminAccountResponse?: Record<string, any>;
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
