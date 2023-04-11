import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
/**
 * Provides the configuration information for indexing Salesforce custom articles.
 */
export declare class SalesforceCustomKnowledgeArticleTypeConfiguration extends SpeakeasyBase {
    documentDataFieldName: string;
    documentTitleFieldName?: string;
    fieldMappings?: DataSourceToIndexFieldMapping[];
    name: string;
}
