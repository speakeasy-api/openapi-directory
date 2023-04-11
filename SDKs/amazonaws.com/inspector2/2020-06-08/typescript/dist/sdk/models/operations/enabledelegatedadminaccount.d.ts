import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnableDelegatedAdminAccountRequestBody extends SpeakeasyBase {
    /**
     * The idempotency token for the request.
     */
    clientToken?: string;
    /**
     * The Amazon Web Services account ID of the Amazon Inspector delegated administrator.
     */
    delegatedAdminAccountId: string;
}
export declare class EnableDelegatedAdminAccountRequest extends SpeakeasyBase {
    requestBody: EnableDelegatedAdminAccountRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EnableDelegatedAdminAccountResponse extends SpeakeasyBase {
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
    enableDelegatedAdminAccountResponse?: shared.EnableDelegatedAdminAccountResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
