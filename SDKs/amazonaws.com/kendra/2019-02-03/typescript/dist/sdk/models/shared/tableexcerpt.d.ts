import { SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";
/**
 * An excerpt from a table within a document. The table excerpt displays up to five columns and three rows, depending on how many table cells are relevant to the query and how many columns are available in the original table. The top most relevant cell is displayed in the table excerpt, along with the next most relevant cells.
 */
export declare class TableExcerpt extends SpeakeasyBase {
    rows?: TableRow[];
    totalNumberOfRows?: number;
}
