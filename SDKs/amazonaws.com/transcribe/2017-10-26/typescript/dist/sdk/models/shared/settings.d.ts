import { SpeakeasyBase } from "../../../internal/utils";
import { VocabularyFilterMethodEnum } from "./vocabularyfiltermethodenum";
/**
 * Allows additional optional settings in your request, including channel identification, alternative transcriptions, and speaker partitioning. You can use that to apply custom vocabularies to your transcription job.
 */
export declare class Settings extends SpeakeasyBase {
    channelIdentification?: boolean;
    maxAlternatives?: number;
    maxSpeakerLabels?: number;
    showAlternatives?: boolean;
    showSpeakerLabels?: boolean;
    vocabularyFilterMethod?: VocabularyFilterMethodEnum;
    vocabularyFilterName?: string;
    vocabularyName?: string;
}
