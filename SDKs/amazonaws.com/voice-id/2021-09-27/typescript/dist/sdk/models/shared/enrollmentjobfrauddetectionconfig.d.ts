import { SpeakeasyBase } from "../../../internal/utils";
import { FraudDetectionActionEnum } from "./frauddetectionactionenum";
/**
 * The fraud detection configuration to be used during the batch speaker enrollment job.
 */
export declare class EnrollmentJobFraudDetectionConfig extends SpeakeasyBase {
    fraudDetectionAction?: FraudDetectionActionEnum;
    riskThreshold?: number;
    watchlistIds?: string[];
}
