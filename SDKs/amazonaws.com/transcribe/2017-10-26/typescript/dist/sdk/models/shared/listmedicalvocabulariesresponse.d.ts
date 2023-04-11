import { SpeakeasyBase } from "../../../internal/utils";
import { VocabularyInfo } from "./vocabularyinfo";
import { VocabularyStateEnum } from "./vocabularystateenum";
/**
 * Success
 */
export declare class ListMedicalVocabulariesResponse extends SpeakeasyBase {
    nextToken?: string;
    status?: VocabularyStateEnum;
    vocabularies?: VocabularyInfo[];
}
