import { SpeakeasyBase } from "../../../internal/utils";
import { TunnelTypeEnum } from "./tunneltypeenum";
export declare class TunnelInfo extends SpeakeasyBase {
    /**
     * Destination address of the tunnel.
     */
    tunnelDstAddress: string;
    tunnelSpecificData?: string;
    /**
     * Source address of the tunnel.
     */
    tunnelSrcAddress: string;
    /**
     * Type of tunnel.
     */
    tunnelType: TunnelTypeEnum;
}
