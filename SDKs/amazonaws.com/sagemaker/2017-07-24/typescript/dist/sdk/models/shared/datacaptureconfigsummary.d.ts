import { SpeakeasyBase } from "../../../internal/utils";
import { CaptureStatusEnum } from "./capturestatusenum";
/**
 * The currently active data capture configuration used by your Endpoint.
 */
export declare class DataCaptureConfigSummary extends SpeakeasyBase {
    captureStatus: CaptureStatusEnum;
    currentSamplingPercentage: number;
    destinationS3Uri: string;
    enableCapture: boolean;
    kmsKeyId: string;
}
