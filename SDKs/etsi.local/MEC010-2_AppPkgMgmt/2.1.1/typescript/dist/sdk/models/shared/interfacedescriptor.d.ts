import { SpeakeasyBase } from "../../../internal/utils";
import { InterfaceTypeEnum } from "./interfacetypeenum";
import { TunnelInfo } from "./tunnelinfo";
export declare class InterfaceDescriptor extends SpeakeasyBase {
    dstIPAddress?: string;
    dstMACAddress?: string;
    interfaceType: InterfaceTypeEnum;
    srcMACAddress?: string;
    tunnelInfo?: TunnelInfo;
}
