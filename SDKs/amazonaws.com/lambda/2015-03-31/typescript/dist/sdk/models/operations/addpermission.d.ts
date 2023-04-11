import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.
 */
export declare enum AddPermissionRequestBodyFunctionUrlAuthTypeEnum {
    None = "NONE",
    AwsIam = "AWS_IAM"
}
export declare class AddPermissionRequestBody extends SpeakeasyBase {
    /**
     * The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.
     */
    action: string;
    /**
     * For Alexa Smart Home functions, a token that the invoker must supply.
     */
    eventSourceToken?: string;
    /**
     * The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.
     */
    functionUrlAuthType?: AddPermissionRequestBodyFunctionUrlAuthTypeEnum;
    /**
     * The Amazon Web Service or Amazon Web Services account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.
     */
    principal: string;
    /**
     * The identifier for your organization in Organizations. Use this to grant permissions to all the Amazon Web Services accounts under this organization.
     */
    principalOrgID?: string;
    /**
     * Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.
     */
    revisionId?: string;
    /**
     * For Amazon Web Service, the ID of the Amazon Web Services account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
     */
    sourceAccount?: string;
    /**
     * <p>For Amazon Web Services, the ARN of the Amazon Web Services resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.</p> <p>Note that Lambda configures the comparison using the <code>StringLike</code> operator.</p>
     */
    sourceArn?: string;
    /**
     * A statement identifier that differentiates the statement from others in the same policy.
     */
    statementId: string;
}
export declare class AddPermissionRequest extends SpeakeasyBase {
    /**
     * <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    functionName: string;
    /**
     * Specify a version or alias to add permissions to a published version of the function.
     */
    qualifier?: string;
    requestBody: AddPermissionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddPermissionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addPermissionResponse?: shared.AddPermissionResponse;
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * PolicyLengthExceededException
     */
    policyLengthExceededException?: any;
    /**
     * PreconditionFailedException
     */
    preconditionFailedException?: any;
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
