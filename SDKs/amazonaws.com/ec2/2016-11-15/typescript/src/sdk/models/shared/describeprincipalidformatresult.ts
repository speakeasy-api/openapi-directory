import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePrincipalIdFormatResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  principals?: Record<string, any>;
}
