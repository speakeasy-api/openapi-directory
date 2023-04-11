import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The <code>PipelineOutputConfig</code> structure.
 */
export declare class UpdatePipelineRequestBodyContentConfig extends SpeakeasyBase {
    bucket?: string;
    permissions?: shared.Permission[];
    storageClass?: string;
}
/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
 */
export declare class UpdatePipelineRequestBodyNotifications extends SpeakeasyBase {
    completed?: string;
    error?: string;
    progressing?: string;
    warning?: string;
}
/**
 * The <code>PipelineOutputConfig</code> structure.
 */
export declare class UpdatePipelineRequestBodyThumbnailConfig extends SpeakeasyBase {
    bucket?: string;
    permissions?: shared.Permission[];
    storageClass?: string;
}
export declare class UpdatePipelineRequestBody extends SpeakeasyBase {
    /**
     * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>
     */
    awsKmsKeyArn?: string;
    /**
     * The <code>PipelineOutputConfig</code> structure.
     */
    contentConfig?: UpdatePipelineRequestBodyContentConfig;
    /**
     * The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.
     */
    inputBucket?: string;
    /**
     * <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters</p>
     */
    name?: string;
    /**
     * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
     */
    notifications?: UpdatePipelineRequestBodyNotifications;
    /**
     * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.
     */
    role?: string;
    /**
     * The <code>PipelineOutputConfig</code> structure.
     */
    thumbnailConfig?: UpdatePipelineRequestBodyThumbnailConfig;
}
export declare class UpdatePipelineRequest extends SpeakeasyBase {
    /**
     * The ID of the pipeline that you want to update.
     */
    id: string;
    requestBody: UpdatePipelineRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdatePipelineResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * IncompatibleVersionException
     */
    incompatibleVersionException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updatePipelineResponse?: shared.UpdatePipelineResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
