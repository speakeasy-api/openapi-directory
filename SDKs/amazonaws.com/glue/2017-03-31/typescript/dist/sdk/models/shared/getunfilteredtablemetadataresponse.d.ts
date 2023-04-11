import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnRowFilter } from "./columnrowfilter";
import { Table } from "./table";
/**
 * Success
 */
export declare class GetUnfilteredTableMetadataResponse extends SpeakeasyBase {
    authorizedColumns?: string[];
    cellFilters?: ColumnRowFilter[];
    isRegisteredWithLakeFormation?: boolean;
    table?: Table;
}
