import { SpeakeasyBase } from "../../../internal/utils";
import { InterfaceTypeEnum } from "./interfacetypeenum";
import { TunnelInfo } from "./tunnelinfo";
export declare class InterfaceDescriptor extends SpeakeasyBase {
    /**
     * If the interface type is IP, the destination address identifies the IP address of the destination. Only used for dstInterface.
     */
    dstIPAddress?: string;
    /**
     * If the interface type is MAC, the destination address identifies the MAC address of the destination. Only used for dstInterface.
     */
    dstMACAddress?: string;
    /**
     * Type of interface.
     */
    interfaceType: InterfaceTypeEnum;
    /**
     * If the interface type is MAC, the source address identifies the MAC address of the interface.
     */
    srcMACAddress?: string;
    tunnelInfo?: TunnelInfo;
}
