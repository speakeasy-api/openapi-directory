import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnableOrganizationAdminAccountRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Web Services account identifier of the account to designate as the Detective administrator account for the organization.
     */
    accountId: string;
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
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
