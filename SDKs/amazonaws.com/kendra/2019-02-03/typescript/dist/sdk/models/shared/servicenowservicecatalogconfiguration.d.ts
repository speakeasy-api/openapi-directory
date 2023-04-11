import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
/**
 * Provides the configuration information for crawling service catalog items in the ServiceNow site
 */
export declare class ServiceNowServiceCatalogConfiguration extends SpeakeasyBase {
    crawlAttachments?: boolean;
    documentDataFieldName: string;
    documentTitleFieldName?: string;
    excludeAttachmentFilePatterns?: string[];
    fieldMappings?: DataSourceToIndexFieldMapping[];
    includeAttachmentFilePatterns?: string[];
}
