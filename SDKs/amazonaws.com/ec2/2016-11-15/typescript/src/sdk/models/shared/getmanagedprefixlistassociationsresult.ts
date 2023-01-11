import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetManagedPrefixListAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListAssociations?: Record<string, any>;
}
