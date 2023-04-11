import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of the create authorizer request.
 */
export declare enum CreateAuthorizerRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class CreateAuthorizerRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the authorizer's Lambda function.
     */
    authorizerFunctionArn: string;
    /**
     * <p>When <code>true</code>, the result from the authorizer’s Lambda function is cached for clients that use persistent HTTP connections. The results are cached for the time specified by the Lambda function in <code>refreshAfterInSeconds</code>. This value does not affect authorization of clients that use MQTT connections.</p> <p>The default value is <code>false</code>.</p>
     */
    enableCachingForHttp?: boolean;
    /**
     * Specifies whether IoT validates the token signature in an authorization request.
     */
    signingDisabled?: boolean;
    /**
     * The status of the create authorizer request.
     */
    status?: CreateAuthorizerRequestBodyStatusEnum;
    /**
     * <p>Metadata which can be used to manage the custom authorizer.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
     */
    tags?: shared.Tag[];
    /**
     * The name of the token key used to extract the token from the HTTP headers.
     */
    tokenKeyName?: string;
    /**
     * The public keys used to verify the digital signature returned by your custom authentication service.
     */
    tokenSigningPublicKeys?: Record<string, string>;
}
export declare class CreateAuthorizerRequest extends SpeakeasyBase {
    requestBody: CreateAuthorizerRequestBody;
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
export declare class CreateAuthorizerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAuthorizerResponse?: shared.CreateAuthorizerResponse;
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
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
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
}
