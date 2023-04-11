import { SpeakeasyBase } from "../../../internal/utils";
import { StackResourceDriftStatusEnum } from "./stackresourcedriftstatusenum";
/**
 * Contains information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration.
 */
export declare class StackResourceDriftInformation extends SpeakeasyBase {
    lastCheckTimestamp?: Date;
    stackResourceDriftStatus: StackResourceDriftStatusEnum;
}
