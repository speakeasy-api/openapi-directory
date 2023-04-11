import { SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";
/**
 * Information regarding a detected signature on a page.
 */
export declare class SignatureDetection extends SpeakeasyBase {
    confidence?: number;
    /**
     * Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
     */
    geometry?: Geometry;
}
