import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateConnectivityInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
