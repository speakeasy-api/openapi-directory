import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the minimum and maximum for the <code>NetworkInterfaceCount</code> object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.
 */
export declare class NetworkInterfaceCountRequest extends SpeakeasyBase {
    max?: number;
    min?: number;
}
