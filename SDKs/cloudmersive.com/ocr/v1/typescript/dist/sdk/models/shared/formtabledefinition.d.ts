import { SpeakeasyBase } from "../../../internal/utils";
import { FormTableColumnDefinition } from "./formtablecolumndefinition";
/**
 * Definition of a form table for OCR data extraction from images
 */
export declare class FormTableDefinition extends SpeakeasyBase {
    /**
     * Definition of the columns in the table
     */
    columnDefinitions?: FormTableColumnDefinition[];
    /**
     * Optional; the ID of the table
     */
    tableID?: string;
    /**
     * Optional - scale factor for target row height - relative to height of column header
     */
    targetRowHeightRelative?: number;
    /**
     * Optional - scale factor for target table height - relative to maximum height of headers of columns
     */
    targetTableHeightRelative?: number;
}
