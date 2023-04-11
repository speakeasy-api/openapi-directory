import { SpeakeasyBase } from "../../../internal/utils";
import { DialogState } from "./dialogstate";
import { ResponseSpecification } from "./responsespecification";
/**
 * A set of actions that Amazon Lex should run if none of the other conditions are met.
 */
export declare class DefaultConditionalBranch extends SpeakeasyBase {
    nextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    response?: ResponseSpecification;
}
