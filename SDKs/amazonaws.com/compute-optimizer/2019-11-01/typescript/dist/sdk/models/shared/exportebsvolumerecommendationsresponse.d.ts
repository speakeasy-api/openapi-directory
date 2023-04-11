import { SpeakeasyBase } from "../../../internal/utils";
import { S3Destination } from "./s3destination";
/**
 * Success
 */
export declare class ExportEBSVolumeRecommendationsResponse extends SpeakeasyBase {
    jobId?: string;
    /**
     * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
     */
    s3Destination?: S3Destination;
}
