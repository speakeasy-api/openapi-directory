import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisableDelegatedAdminAccountRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID of the current Amazon Inspector delegated administrator.
     */
    delegatedAdminAccountId: string;
}
export declare class DisableDelegatedAdminAccountRequest extends SpeakeasyBase {
    requestBody: DisableDelegatedAdminAccountRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisableDelegatedAdminAccountResponse extends SpeakeasyBase {
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
    disableDelegatedAdminAccountResponse?: shared.DisableDelegatedAdminAccountResponse;
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
