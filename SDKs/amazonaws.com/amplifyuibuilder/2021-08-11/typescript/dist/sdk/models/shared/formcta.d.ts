import { SpeakeasyBase } from "../../../internal/utils";
import { FormButton } from "./formbutton";
import { FormButtonsPositionEnum } from "./formbuttonspositionenum";
/**
 * Describes the call to action button configuration for the form.
 */
export declare class FormCTA extends SpeakeasyBase {
    cancel?: FormButton;
    clear?: FormButton;
    position?: FormButtonsPositionEnum;
    submit?: FormButton;
}
