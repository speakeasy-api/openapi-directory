import { SpeakeasyBase } from "../../../internal/utils";
import { PathFormat } from "./pathformat";
import { TranscriptFilter } from "./transcriptfilter";
import { TranscriptFormatEnum } from "./transcriptformatenum";
/**
 * The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.
 */
export declare class S3BucketTranscriptSource extends SpeakeasyBase {
    kmsKeyArn?: string;
    pathFormat?: PathFormat;
    s3BucketName: string;
    transcriptFilter?: TranscriptFilter;
    transcriptFormat: TranscriptFormatEnum;
}
