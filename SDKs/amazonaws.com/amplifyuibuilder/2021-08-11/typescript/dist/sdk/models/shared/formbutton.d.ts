import { SpeakeasyBase } from "../../../internal/utils";
import { FieldPosition } from "./fieldposition";
/**
 * Describes the configuration for a button UI element that is a part of a form.
 */
export declare class FormButton extends SpeakeasyBase {
    children?: string;
    excluded?: boolean;
    position?: FieldPosition;
}
