import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
 */
export declare class CreateAliasRequestBodyRoutingConfig extends SpeakeasyBase {
    additionalVersionWeights?: Record<string, number>;
}
export declare class CreateAliasRequestBody extends SpeakeasyBase {
    /**
     * A description of the alias.
     */
    description?: string;
    /**
     * The function version that the alias invokes.
     */
    functionVersion: string;
    /**
     * The name of the alias.
     */
    name: string;
    /**
     * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
     */
    routingConfig?: CreateAliasRequestBodyRoutingConfig;
}
export declare class CreateAliasRequest extends SpeakeasyBase {
    /**
     * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    functionName: string;
    requestBody: CreateAliasRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAliasResponse extends SpeakeasyBase {
    /**
     * Success
     */
    aliasConfiguration?: shared.AliasConfiguration;
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
