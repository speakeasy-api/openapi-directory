import { SpeakeasyBase } from "../../../internal/utils";
import { FormTableDefinition } from "./formtabledefinition";
import { TableRowResult } from "./tablerowresult";
/**
 * The result of reading a table via OCR from a form
 */
export declare class TableResult extends SpeakeasyBase {
    /**
     * Definition of a form table for OCR data extraction from images
     */
    tableDefinition?: FormTableDefinition;
    /**
     * Rows of data in the table
     */
    tableRowsResult?: TableRowResult[];
}
