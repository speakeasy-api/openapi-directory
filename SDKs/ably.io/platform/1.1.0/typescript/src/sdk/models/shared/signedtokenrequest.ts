import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignedTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capability" })
  capability: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=keyName" })
  keyName: string;

  @SpeakeasyMetadata({ data: "json, name=mac" })
  mac: string;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: number;
}
