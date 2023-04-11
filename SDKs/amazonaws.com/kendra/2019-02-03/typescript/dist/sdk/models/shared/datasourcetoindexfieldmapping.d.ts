import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the <code>UpdateIndex</code> API.
 */
export declare class DataSourceToIndexFieldMapping extends SpeakeasyBase {
    dataSourceFieldName: string;
    dateFieldFormat?: string;
    indexFieldName: string;
}
