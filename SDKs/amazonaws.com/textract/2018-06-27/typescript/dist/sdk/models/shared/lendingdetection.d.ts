import { SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";
import { SelectionStatusEnum } from "./selectionstatusenum";
/**
 * The results extracted for a lending document.
 */
export declare class LendingDetection extends SpeakeasyBase {
    confidence?: number;
    /**
     * Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
     */
    geometry?: Geometry;
    selectionStatus?: SelectionStatusEnum;
    text?: string;
}
