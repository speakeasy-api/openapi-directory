import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for ResetNetworkInterfaceAttribute.
 */
export declare class ResetNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    dryRun?: boolean;
    networkInterfaceId: string;
    sourceDestCheck?: string;
}
