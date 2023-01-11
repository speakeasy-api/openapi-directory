import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePrefixListsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixLists?: Record<string, any>;
}
