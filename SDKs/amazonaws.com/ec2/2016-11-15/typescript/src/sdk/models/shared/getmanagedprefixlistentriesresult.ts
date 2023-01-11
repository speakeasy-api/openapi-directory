import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetManagedPrefixListEntriesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  entries?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
