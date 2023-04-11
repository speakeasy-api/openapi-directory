import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration to control how SageMaker captures inference data for batch transform jobs.
 */
export declare class BatchDataCaptureConfig extends SpeakeasyBase {
    destinationS3Uri: string;
    generateInferenceId?: boolean;
    kmsKeyId?: string;
}
