import { SpeakeasyBase } from "../../../internal/utils";
import { CommandFilterKeyEnum } from "./commandfilterkeyenum";
/**
 * <p>Describes a command filter.</p> <note> <p>A managed node ID can't be specified when a command status is <code>Pending</code> because the command hasn't run on the node yet.</p> </note>
 */
export declare class CommandFilter extends SpeakeasyBase {
    key: CommandFilterKeyEnum;
    value: string;
}
