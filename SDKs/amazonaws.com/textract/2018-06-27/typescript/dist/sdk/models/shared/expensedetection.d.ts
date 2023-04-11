import { SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";
/**
 * An object used to store information about the Value or Label detected by Amazon Textract.
 */
export declare class ExpenseDetection extends SpeakeasyBase {
    confidence?: number;
    /**
     * Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
     */
    geometry?: Geometry;
    text?: string;
}
