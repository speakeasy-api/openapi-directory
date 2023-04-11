import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateFunctionCodeRequestBody extends SpeakeasyBase {
    /**
     * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.
     */
    architectures?: shared.ArchitectureEnum[];
    /**
     * Set to true to validate the request parameters and access permissions without modifying the function code.
     */
    dryRun?: boolean;
    /**
     * URI of a container image in the Amazon ECR registry. Do not use for a function defined with a .zip file archive.
     */
    imageUri?: string;
    /**
     * Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately.
     */
    publish?: boolean;
    /**
     * Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.
     */
    revisionId?: string;
    /**
     * An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account. Use only with a function defined with a .zip file archive deployment package.
     */
    s3Bucket?: string;
    /**
     * The Amazon S3 key of the deployment package. Use only with a function defined with a .zip file archive deployment package.
     */
    s3Key?: string;
    /**
     * For versioned objects, the version of the deployment package object to use.
     */
    s3ObjectVersion?: string;
    /**
     * The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you. Use only with a function defined with a .zip file archive deployment package.
     */
    zipFile?: string;
}
export declare class UpdateFunctionCodeRequest extends SpeakeasyBase {
    /**
     * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    functionName: string;
    requestBody: UpdateFunctionCodeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFunctionCodeResponse extends SpeakeasyBase {
    /**
     * CodeSigningConfigNotFoundException
     */
    codeSigningConfigNotFoundException?: any;
    /**
     * CodeStorageExceededException
     */
    codeStorageExceededException?: any;
    /**
     * CodeVerificationFailedException
     */
    codeVerificationFailedException?: any;
    contentType: string;
    /**
     * Success
     */
    functionConfiguration?: shared.FunctionConfiguration;
    /**
     * InvalidCodeSignatureException
     */
    invalidCodeSignatureException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
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
