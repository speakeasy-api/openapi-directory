import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledActionFilterNameEnum } from "./scheduledactionfilternameenum";
/**
 * A set of elements to filter the returned scheduled actions.
 */
export declare class ScheduledActionFilterList extends SpeakeasyBase {
    name: ScheduledActionFilterNameEnum;
    values: string[];
}
