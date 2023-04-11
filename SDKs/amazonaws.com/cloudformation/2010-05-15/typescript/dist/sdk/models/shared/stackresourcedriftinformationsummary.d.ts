import { SpeakeasyBase } from "../../../internal/utils";
import { StackResourceDriftStatusEnum } from "./stackresourcedriftstatusenum";
/**
 * Summarizes information about whether the resource's actual configuration differs, or has <i>drifted</i>, from its expected configuration.
 */
export declare class StackResourceDriftInformationSummary extends SpeakeasyBase {
    lastCheckTimestamp?: Date;
    stackResourceDriftStatus: StackResourceDriftStatusEnum;
}
