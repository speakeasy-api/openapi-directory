import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClaimDevicesByClaimCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClaimCode" })
  claimCode?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Total" })
  total?: Record<string, any>;
}
