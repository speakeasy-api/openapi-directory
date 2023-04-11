import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceToIndexFieldMapping } from "./datasourcetoindexfieldmapping";
/**
 * Provides information about how Amazon Kendra should use the columns of a database in an index.
 */
export declare class ColumnConfiguration extends SpeakeasyBase {
    changeDetectingColumns: string[];
    documentDataColumnName: string;
    documentIdColumnName: string;
    documentTitleColumnName?: string;
    fieldMappings?: DataSourceToIndexFieldMapping[];
}
