import { SpeakeasyBase } from "../../../internal/utils";
import { CaptureContentTypeHeader } from "./capturecontenttypeheader";
/**
 * The Amazon S3 location and configuration for storing inference request and response data.
 */
export declare class InferenceExperimentDataStorageConfig extends SpeakeasyBase {
    /**
     * Configuration specifying how to treat different headers. If no headers are specified SageMaker will by default base64 encode when capturing the data.
     */
    contentType?: CaptureContentTypeHeader;
    destination: string;
    kmsKey?: string;
}
