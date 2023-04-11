import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
/**
 * Provides the configuration information for standard Salesforce knowledge articles.
 */
export declare class SalesforceStandardKnowledgeArticleTypeConfiguration extends SpeakeasyBase {
    documentDataFieldName: string;
    documentTitleFieldName?: string;
    fieldMappings?: DataSourceToIndexFieldMapping[];
}
