import { SpeakeasyBase } from "../../../internal/utils";
import { BotImportSpecification } from "./botimportspecification";
import { BotLocaleImportSpecification } from "./botlocaleimportspecification";
import { CustomVocabularyImportSpecification } from "./customvocabularyimportspecification";
/**
 * Provides information about the bot or bot locale that you want to import. You can specify the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
 */
export declare class ImportResourceSpecification extends SpeakeasyBase {
    botImportSpecification?: BotImportSpecification;
    botLocaleImportSpecification?: BotLocaleImportSpecification;
    /**
     * Provides the parameters required for importing a custom vocabulary.
     */
    customVocabularyImportSpecification?: CustomVocabularyImportSpecification;
}
