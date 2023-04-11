import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * The collection of event patterns used to filter events. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event Patterns</a> in the <i>Amazon EventBridge User Guide</i>.
 */
export declare class FilterCriteria extends SpeakeasyBase {
    filters?: Filter[];
}
