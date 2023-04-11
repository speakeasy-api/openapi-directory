import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the configuration information for your content sources, such as data sources, FAQs, and content indexed directly via <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">BatchPutDocument</a>.
 */
export declare class ContentSourceConfiguration extends SpeakeasyBase {
    dataSourceIds?: string[];
    directPutContent?: boolean;
    faqIds?: string[];
}
