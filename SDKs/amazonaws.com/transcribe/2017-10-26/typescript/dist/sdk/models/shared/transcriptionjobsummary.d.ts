import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { LanguageCodeEnum } from "./languagecodeenum";
import { LanguageCodeItem } from "./languagecodeitem";
import { ModelSettings } from "./modelsettings";
import { OutputLocationTypeEnum } from "./outputlocationtypeenum";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
/**
 * Provides detailed information about a specific transcription job.
 */
export declare class TranscriptionJobSummary extends SpeakeasyBase {
    completionTime?: Date;
    contentRedaction?: ContentRedaction;
    creationTime?: Date;
    failureReason?: string;
    identifiedLanguageScore?: number;
    identifyLanguage?: boolean;
    identifyMultipleLanguages?: boolean;
    languageCode?: LanguageCodeEnum;
    languageCodes?: LanguageCodeItem[];
    /**
     * <p>Provides the name of the custom language model that was included in the specified transcription job.</p> <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code> sub-parameter if you're <b>not</b> using automatic language identification (<code/>). If using <code>LanguageIdSettings</code> in your request, this parameter contains a <code>LanguageModelName</code> sub-parameter.</p>
     */
    modelSettings?: ModelSettings;
    outputLocationType?: OutputLocationTypeEnum;
    startTime?: Date;
    transcriptionJobName?: string;
    transcriptionJobStatus?: TranscriptionJobStatusEnum;
}
