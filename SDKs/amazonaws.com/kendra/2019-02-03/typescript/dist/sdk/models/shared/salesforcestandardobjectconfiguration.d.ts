import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
import { SalesforceStandardObjectNameEnum } from "./salesforcestandardobjectnameenum";
/**
 * Provides the configuration information for indexing a single standard object.
 */
export declare class SalesforceStandardObjectConfiguration extends SpeakeasyBase {
    documentDataFieldName: string;
    documentTitleFieldName?: string;
    fieldMappings?: DataSourceToIndexFieldMapping[];
    name: SalesforceStandardObjectNameEnum;
}
