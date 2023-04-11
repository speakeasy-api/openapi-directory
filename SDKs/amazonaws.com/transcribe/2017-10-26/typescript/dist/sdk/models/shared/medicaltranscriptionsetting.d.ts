import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allows additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your medical transcription job.
 */
export declare class MedicalTranscriptionSetting extends SpeakeasyBase {
    channelIdentification?: boolean;
    maxAlternatives?: number;
    maxSpeakerLabels?: number;
    showAlternatives?: boolean;
    showSpeakerLabels?: boolean;
    vocabularyName?: string;
}
