import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the details of an account to associate with an Amazon Macie administrator account.
 */
export declare class CreateMemberRequestBodyAccount extends SpeakeasyBase {
    accountId?: string;
    email?: string;
}
export declare class CreateMemberRequestBody extends SpeakeasyBase {
    /**
     * Specifies the details of an account to associate with an Amazon Macie administrator account.
     */
    account: CreateMemberRequestBodyAccount;
    /**
     * A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateMemberRequest extends SpeakeasyBase {
    requestBody: CreateMemberRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMemberResponse extends SpeakeasyBase {
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
    createMemberResponse?: shared.CreateMemberResponse;
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
