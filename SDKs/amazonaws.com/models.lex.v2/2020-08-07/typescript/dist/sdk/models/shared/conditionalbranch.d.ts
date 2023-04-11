import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { DialogState } from "./dialogstate";
import { ResponseSpecification } from "./responsespecification";
/**
 * A set of actions that Amazon Lex should run if the condition is matched.
 */
export declare class ConditionalBranch extends SpeakeasyBase {
    condition: Condition;
    name: string;
    nextStep: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    response?: ResponseSpecification;
}
