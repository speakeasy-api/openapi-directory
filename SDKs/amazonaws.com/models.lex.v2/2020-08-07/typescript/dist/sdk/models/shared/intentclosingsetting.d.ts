import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalSpecification } from "./conditionalspecification";
import { DialogState } from "./dialogstate";
import { ResponseSpecification } from "./responsespecification";
/**
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
 */
export declare class IntentClosingSetting extends SpeakeasyBase {
    active?: boolean;
    closingResponse?: ResponseSpecification;
    conditional?: ConditionalSpecification;
    nextStep?: DialogState;
}
