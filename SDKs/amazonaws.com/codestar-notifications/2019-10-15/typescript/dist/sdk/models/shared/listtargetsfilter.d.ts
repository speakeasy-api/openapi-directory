import { SpeakeasyBase } from "../../../internal/utils";
import { ListTargetsFilterNameEnum } from "./listtargetsfilternameenum";
/**
 * Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Chatbot topics as targets, you could specify a ListTargetsFilter Name as <code>TargetType</code> and a Value of <code>SNS</code>, and a Name of <code>TARGET_STATUS</code> and a Value of <code>ACTIVE</code>.
 */
export declare class ListTargetsFilter extends SpeakeasyBase {
    name: ListTargetsFilterNameEnum;
    value: string;
}
