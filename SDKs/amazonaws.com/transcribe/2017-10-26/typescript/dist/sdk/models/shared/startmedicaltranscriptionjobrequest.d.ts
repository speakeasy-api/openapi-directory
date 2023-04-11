import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { MedicalContentIdentificationTypeEnum } from "./medicalcontentidentificationtypeenum";
import { MedicalTranscriptionSetting } from "./medicaltranscriptionsetting";
import { SpecialtyEnum } from "./specialtyenum";
import { Tag } from "./tag";
import { TypeEnum } from "./typeenum";
export declare class StartMedicalTranscriptionJobRequest extends SpeakeasyBase {
    contentIdentificationType?: MedicalContentIdentificationTypeEnum;
    kmsEncryptionContext?: Record<string, string>;
    languageCode: LanguageCodeEnum;
    /**
     * <p>Describes the Amazon S3 location of the media file you want to use in your request.</p> <p>For information on supported media formats, refer to the <a href="https://docs.aws.amazon.com/APIReference/API_StartTranscriptionJob.html#transcribe-StartTranscriptionJob-request-MediaFormat">MediaFormat</a> parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section in the Amazon S3 Developer Guide.</p>
     */
    media: Media;
    mediaFormat?: MediaFormatEnum;
    mediaSampleRateHertz?: number;
    medicalTranscriptionJobName: string;
    outputBucketName: string;
    outputEncryptionKMSKeyId?: string;
    outputKey?: string;
    settings?: MedicalTranscriptionSetting;
    specialty: SpecialtyEnum;
    tags?: Tag[];
    type: TypeEnum;
}
