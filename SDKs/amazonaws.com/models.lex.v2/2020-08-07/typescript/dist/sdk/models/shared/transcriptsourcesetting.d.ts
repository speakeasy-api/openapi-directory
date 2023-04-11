import { SpeakeasyBase } from "../../../internal/utils";
import { S3BucketTranscriptSource } from "./s3buckettranscriptsource";
/**
 * Indicates the setting of the location where the transcript is stored.
 */
export declare class TranscriptSourceSetting extends SpeakeasyBase {
    s3BucketTranscriptSource?: S3BucketTranscriptSource;
}
