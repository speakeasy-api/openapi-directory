import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
/**
 * Provides the configuration information for processing attachments to Salesforce standard objects.
 */
export declare class SalesforceStandardObjectAttachmentConfiguration extends SpeakeasyBase {
    documentTitleFieldName?: string;
    fieldMappings?: DataSourceToIndexFieldMapping[];
}
