import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { MedicalContentIdentificationTypeEnum } from "./medicalcontentidentificationtypeenum";
import { MedicalTranscript } from "./medicaltranscript";
import { MedicalTranscriptionSetting } from "./medicaltranscriptionsetting";
import { SpecialtyEnum } from "./specialtyenum";
import { Tag } from "./tag";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
import { TypeEnum } from "./typeenum";
/**
 * <p>Provides detailed information about a medical transcription job.</p> <p>To view the status of the specified medical transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p>
 */
export declare class MedicalTranscriptionJob extends SpeakeasyBase {
    completionTime?: Date;
    contentIdentificationType?: MedicalContentIdentificationTypeEnum;
    creationTime?: Date;
    failureReason?: string;
    languageCode?: LanguageCodeEnum;
    /**
     * <p>Describes the Amazon S3 location of the media file you want to use in your request.</p> <p>For information on supported media formats, refer to the <a href="https://docs.aws.amazon.com/APIReference/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-MediaFormat">MediaFormat</a> parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section in the Amazon S3 Developer Guide.</p>
     */
    media?: Media;
    mediaFormat?: MediaFormatEnum;
    mediaSampleRateHertz?: number;
    medicalTranscriptionJobName?: string;
    settings?: MedicalTranscriptionSetting;
    specialty?: SpecialtyEnum;
    startTime?: Date;
    tags?: Tag[];
    transcript?: MedicalTranscript;
    transcriptionJobStatus?: TranscriptionJobStatusEnum;
    type?: TypeEnum;
}
