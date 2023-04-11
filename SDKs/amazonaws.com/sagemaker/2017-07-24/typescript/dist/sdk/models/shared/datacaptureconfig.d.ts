import { SpeakeasyBase } from "../../../internal/utils";
import { CaptureContentTypeHeader } from "./capturecontenttypeheader";
import { CaptureOption } from "./captureoption";
/**
 * Configuration to control how SageMaker captures inference data.
 */
export declare class DataCaptureConfig extends SpeakeasyBase {
    captureContentTypeHeader?: CaptureContentTypeHeader;
    captureOptions: CaptureOption[];
    destinationS3Uri: string;
    enableCapture?: boolean;
    initialSamplingPercentage: number;
    kmsKeyId?: string;
}
