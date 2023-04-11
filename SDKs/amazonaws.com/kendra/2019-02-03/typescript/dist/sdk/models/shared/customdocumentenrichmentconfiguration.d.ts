import { SpeakeasyBase } from "../../../internal/utils";
import { HookConfiguration } from "./hookconfiguration";
import { InlineCustomDocumentEnrichmentConfiguration } from "./inlinecustomdocumentenrichmentconfiguration";
/**
 * <p>Provides the configuration information for altering document metadata and content during the document ingestion process.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>
 */
export declare class CustomDocumentEnrichmentConfiguration extends SpeakeasyBase {
    inlineConfigurations?: InlineCustomDocumentEnrichmentConfiguration[];
    postExtractionHookConfiguration?: HookConfiguration;
    preExtractionHookConfiguration?: HookConfiguration;
    roleArn?: string;
}
