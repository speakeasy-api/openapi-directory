import { SpeakeasyBase } from "../../../internal/utils";
import { CustomColumn } from "./customcolumn";
import { CustomColumnListLinks } from "./customcolumnlistlinks";
/**
 * Custom column list
 */
export declare class CustomColumnList extends SpeakeasyBase {
    customColumns: CustomColumn[];
    links: CustomColumnListLinks;
}
