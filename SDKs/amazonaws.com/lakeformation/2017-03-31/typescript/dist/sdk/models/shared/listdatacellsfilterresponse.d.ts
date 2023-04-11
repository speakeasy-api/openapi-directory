import { SpeakeasyBase } from "../../../internal/utils";
import { DataCellsFilter } from "./datacellsfilter";
/**
 * Success
 */
export declare class ListDataCellsFilterResponse extends SpeakeasyBase {
    dataCellsFilters?: DataCellsFilter[];
    nextToken?: string;
}
