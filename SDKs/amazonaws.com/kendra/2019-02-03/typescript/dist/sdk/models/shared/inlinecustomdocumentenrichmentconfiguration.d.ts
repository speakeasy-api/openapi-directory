import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentAttributeCondition } from "./documentattributecondition";
import { DocumentAttributeTarget } from "./documentattributetarget";
/**
 * <p>Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Kendra. To apply advanced logic, to go beyond what you can do with basic logic, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_HookConfiguration.html">HookConfiguration</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>
 */
export declare class InlineCustomDocumentEnrichmentConfiguration extends SpeakeasyBase {
    condition?: DocumentAttributeCondition;
    documentContentDeletion?: boolean;
    target?: DocumentAttributeTarget;
}
