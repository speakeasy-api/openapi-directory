import { SpeakeasyBase } from "../../../internal/utils";
import { BotExportSpecification } from "./botexportspecification";
import { BotLocaleExportSpecification } from "./botlocaleexportspecification";
import { CustomVocabularyExportSpecification } from "./customvocabularyexportspecification";
/**
 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
 */
export declare class ExportResourceSpecification extends SpeakeasyBase {
    botExportSpecification?: BotExportSpecification;
    botLocaleExportSpecification?: BotLocaleExportSpecification;
    customVocabularyExportSpecification?: CustomVocabularyExportSpecification;
}
