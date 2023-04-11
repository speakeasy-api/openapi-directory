import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Provides the name of the custom language model that was included in the specified transcription job.</p> <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code> sub-parameter if you're <b>not</b> using automatic language identification (<code/>). If using <code>LanguageIdSettings</code> in your request, this parameter contains a <code>LanguageModelName</code> sub-parameter.</p>
 */
export declare class ModelSettings extends SpeakeasyBase {
    languageModelName?: string;
}
