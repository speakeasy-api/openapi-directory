import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationResultLinks } from "./paginationresultlinks";
export declare class PaginationResult extends SpeakeasyBase {
    entryCount: number;
    links: PaginationResultLinks;
    pageCount: number;
    totalEntryCount: number;
}
