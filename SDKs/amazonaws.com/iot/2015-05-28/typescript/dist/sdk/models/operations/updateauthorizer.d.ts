import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of the update authorizer request.
 */
export declare enum UpdateAuthorizerRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class UpdateAuthorizerRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the authorizer's Lambda function.
     */
    authorizerFunctionArn?: string;
    /**
     * When <code>true</code>, the result from the authorizer’s Lambda function is cached for the time specified in <code>refreshAfterInSeconds</code>. The cached result is used while the device reuses the same HTTP connection.
     */
    enableCachingForHttp?: boolean;
    /**
     * The status of the update authorizer request.
     */
    status?: UpdateAuthorizerRequestBodyStatusEnum;
    /**
     * The key used to extract the token from the HTTP headers.
     */
    tokenKeyName?: string;
    /**
     * The public keys used to verify the token signature.
     */
    tokenSigningPublicKeys?: Record<string, string>;
}
export declare class UpdateAuthorizerRequest extends SpeakeasyBase {
    requestBody: UpdateAuthorizerRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The authorizer name.
     */
    authorizerName: string;
}
export declare class UpdateAuthorizerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateAuthorizerResponse?: shared.UpdateAuthorizerResponse;
}
