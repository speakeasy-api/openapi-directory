import { SpeakeasyBase } from "../../../internal/utils";
import { StatelessCustomActionDefinition } from "./statelesscustomactiondefinition";
/**
 * A custom action definition. A custom action is an optional, non-standard action to use for stateless packet handling.
 */
export declare class RuleGroupSourceCustomActionsDetails extends SpeakeasyBase {
    actionDefinition?: StatelessCustomActionDefinition;
    actionName?: string;
}
