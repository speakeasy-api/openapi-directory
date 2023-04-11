import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateVocabularyFilterRequest extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    vocabularyFilterFileUri?: string;
    vocabularyFilterName: string;
    words?: string[];
}
