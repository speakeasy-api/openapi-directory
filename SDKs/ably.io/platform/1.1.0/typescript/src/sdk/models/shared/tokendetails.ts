import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TokenDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capability" })
  capability?: string;

  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: number;

  @SpeakeasyMetadata({ data: "json, name=issued" })
  issued?: number;

  @SpeakeasyMetadata({ data: "json, name=keyName" })
  keyName?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
