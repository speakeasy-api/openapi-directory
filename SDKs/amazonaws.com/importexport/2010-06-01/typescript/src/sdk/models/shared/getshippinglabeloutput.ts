import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetShippingLabelOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  shippingLabelURL?: string;

  @SpeakeasyMetadata()
  warning?: string;
}
