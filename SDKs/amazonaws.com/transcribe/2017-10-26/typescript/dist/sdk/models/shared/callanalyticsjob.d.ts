import { SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobSettings } from "./callanalyticsjobsettings";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";
import { ChannelDefinition } from "./channeldefinition";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { Transcript } from "./transcript";
/**
 * <p>Provides detailed information about a Call Analytics job.</p> <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status is <code>COMPLETED</code>, the job is finished. You can find your completed transcript at the URI specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in <code>RedactedTranscriptFileUri</code>.</p> <p>If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in the <code>RedactedMediaFileUri</code> field of your response.</p>
 */
export declare class CallAnalyticsJob extends SpeakeasyBase {
    callAnalyticsJobName?: string;
    callAnalyticsJobStatus?: CallAnalyticsJobStatusEnum;
    channelDefinitions?: ChannelDefinition[];
    completionTime?: Date;
    creationTime?: Date;
    dataAccessRoleArn?: string;
    failureReason?: string;
    identifiedLanguageScore?: number;
    languageCode?: LanguageCodeEnum;
    media?: Media;
    mediaFormat?: MediaFormatEnum;
    mediaSampleRateHertz?: number;
    settings?: CallAnalyticsJobSettings;
    startTime?: Date;
    /**
     * Provides you with the Amazon S3 URI you can use to access your transcript.
     */
    transcript?: Transcript;
}
