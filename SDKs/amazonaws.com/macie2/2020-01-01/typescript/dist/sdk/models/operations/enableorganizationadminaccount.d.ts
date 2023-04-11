import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnableOrganizationAdminAccountRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.
     */
    adminAccountId: string;
    /**
     * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
     */
    clientToken?: string;
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
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    enableOrganizationAdminAccountResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
