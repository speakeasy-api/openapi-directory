import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
/**
 * Provides the configuration information for crawling knowledge articles in the ServiceNow site.
 */
export declare class ServiceNowKnowledgeArticleConfiguration extends SpeakeasyBase {
    crawlAttachments?: boolean;
    documentDataFieldName: string;
    documentTitleFieldName?: string;
    excludeAttachmentFilePatterns?: string[];
    fieldMappings?: DataSourceToIndexFieldMapping[];
    filterQuery?: string;
    includeAttachmentFilePatterns?: string[];
}
