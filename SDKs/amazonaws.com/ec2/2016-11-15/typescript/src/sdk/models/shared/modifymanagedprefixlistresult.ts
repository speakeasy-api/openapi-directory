import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyManagedPrefixListResultPrefixList
/** 
 * Information about the prefix list.
**/
export class ModifyManagedPrefixListResultPrefixList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressFamily?: Record<string, any>;

  @SpeakeasyMetadata()
  maxEntries?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListArn?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListId?: Record<string, any>;

  @SpeakeasyMetadata()
  prefixListName?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  stateMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  version?: Record<string, any>;
}


export class ModifyManagedPrefixListResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  prefixList?: ModifyManagedPrefixListResultPrefixList;
}
