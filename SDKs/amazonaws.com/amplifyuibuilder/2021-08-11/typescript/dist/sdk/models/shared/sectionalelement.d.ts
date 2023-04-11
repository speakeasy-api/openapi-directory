import { SpeakeasyBase } from "../../../internal/utils";
import { FieldPosition } from "./fieldposition";
/**
 * Stores the configuration information for a visual helper element for a form. A sectional element can be a header, a text block, or a divider. These elements are static and not associated with any data.
 */
export declare class SectionalElement extends SpeakeasyBase {
    level?: number;
    orientation?: string;
    position?: FieldPosition;
    text?: string;
    type: string;
}
