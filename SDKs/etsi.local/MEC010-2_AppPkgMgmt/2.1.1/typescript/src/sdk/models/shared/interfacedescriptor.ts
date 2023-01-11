import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InterfaceTypeEnum } from "./interfacetypeenum";
import { TunnelInfo } from "./tunnelinfo";



export class InterfaceDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dstIPAddress?: string;

  @SpeakeasyMetadata()
  dstMACAddress?: string;

  @SpeakeasyMetadata()
  interfaceType: InterfaceTypeEnum;

  @SpeakeasyMetadata()
  srcMACAddress?: string;

  @SpeakeasyMetadata()
  tunnelInfo?: TunnelInfo;
}
