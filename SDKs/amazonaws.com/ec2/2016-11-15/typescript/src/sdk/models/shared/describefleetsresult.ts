import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFleetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fleets?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
