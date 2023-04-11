import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogOptionsSpecification } from "./cloudwatchlogoptionsspecification";
/**
 * Options for logging VPN tunnel activity.
 */
export declare class VpnTunnelLogOptionsSpecification extends SpeakeasyBase {
    cloudWatchLogOptions?: CloudWatchLogOptionsSpecification;
}
