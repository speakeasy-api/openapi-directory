import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnWildcard } from "./columnwildcard";
import { RowFilter } from "./rowfilter";
/**
 * A structure that describes certain columns on certain rows.
 */
export declare class DataCellsFilter extends SpeakeasyBase {
    columnNames?: string[];
    columnWildcard?: ColumnWildcard;
    databaseName: string;
    name: string;
    rowFilter?: RowFilter;
    tableCatalogId: string;
    tableName: string;
    versionId?: string;
}
