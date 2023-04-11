import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The output location.
 */
export declare class CreateWorldExportJobRequestBodyOutputLocation extends SpeakeasyBase {
    s3Bucket?: string;
    s3Prefix?: string;
}
export declare class CreateWorldExportJobRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * The IAM role that the world export process uses to access the Amazon S3 bucket and put the export.
     */
    iamRole: string;
    /**
     * The output location.
     */
    outputLocation: CreateWorldExportJobRequestBodyOutputLocation;
    /**
     * A map that contains tag keys and tag values that are attached to the world export job.
     */
    tags?: Record<string, string>;
    /**
     * A list of Amazon Resource Names (arns) that correspond to worlds to export.
     */
    worlds: string[];
}
export declare class CreateWorldExportJobRequest extends SpeakeasyBase {
    requestBody: CreateWorldExportJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorldExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWorldExportJobResponse?: shared.CreateWorldExportJobResponse;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
}
