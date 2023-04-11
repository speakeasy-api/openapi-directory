import { SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";
/**
 * A list of node configurations.
 */
export declare class NodeConfigurationOptionList extends SpeakeasyBase {
    estimatedDiskUtilizationPercent?: number;
    mode?: ModeEnum;
    nodeType?: string;
    numberOfNodes?: number;
}
