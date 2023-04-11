import { SpeakeasyBase } from "../../../internal/utils";
import { StackDriftStatusEnum } from "./stackdriftstatusenum";
/**
 * Contains information about whether the stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted.
 */
export declare class StackDriftInformationSummary extends SpeakeasyBase {
    lastCheckTimestamp?: Date;
    stackDriftStatus: StackDriftStatusEnum;
}
