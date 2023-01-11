import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Insurance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payer_id" })
  payerId?: string;

  @SpeakeasyMetadata({ data: "json, name=payer_name" })
  payerName?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
