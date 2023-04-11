import { SpeakeasyBase } from "../../../internal/utils";
import { S3Destination } from "./s3destination";
/**
 * Success
 */
export declare class ExportAutoScalingGroupRecommendationsResponse extends SpeakeasyBase {
    jobId?: string;
    s3Destination?: S3Destination;
}
