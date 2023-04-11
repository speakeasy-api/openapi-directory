import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { JobExecutionSettings } from "./jobexecutionsettings";
import { LanguageCodeEnum } from "./languagecodeenum";
import { LanguageCodeItem } from "./languagecodeitem";
import { LanguageIdSettings } from "./languageidsettings";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { ModelSettings } from "./modelsettings";
import { Settings } from "./settings";
import { SubtitlesOutput } from "./subtitlesoutput";
import { Tag } from "./tag";
import { Transcript } from "./transcript";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
/**
 * <p>Provides detailed information about a transcription job.</p> <p>To view the status of the specified transcription job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why your transcription job failed.</p> <p>If you enabled content redaction, the redacted transcript can be found at the location specified in <code>RedactedTranscriptFileUri</code>.</p>
 */
export declare class TranscriptionJob extends SpeakeasyBase {
    completionTime?: Date;
    contentRedaction?: ContentRedaction;
    creationTime?: Date;
    failureReason?: string;
    identifiedLanguageScore?: number;
    identifyLanguage?: boolean;
    identifyMultipleLanguages?: boolean;
    jobExecutionSettings?: JobExecutionSettings;
    languageCode?: LanguageCodeEnum;
    languageCodes?: LanguageCodeItem[];
    languageIdSettings?: Record<string, LanguageIdSettings>;
    languageOptions?: LanguageCodeEnum[];
    media?: Media;
    mediaFormat?: MediaFormatEnum;
    mediaSampleRateHertz?: number;
    modelSettings?: ModelSettings;
    settings?: Settings;
    startTime?: Date;
    subtitles?: SubtitlesOutput;
    tags?: Tag[];
    transcript?: Transcript;
    transcriptionJobName?: string;
    transcriptionJobStatus?: TranscriptionJobStatusEnum;
}
