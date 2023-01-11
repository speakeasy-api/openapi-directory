import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppExternalCpd extends SpeakeasyBase {
  @SpeakeasyMetadata()
  inheritedAttributes: Record<string, any>;

  @SpeakeasyMetadata()
  virtualNetworkInterfaceRequirements?: string[];
}
