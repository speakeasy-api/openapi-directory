import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountsWithRestoreAccessList
/** 
 * Describes an Amazon Web Services account authorized to restore a snapshot.
**/
export class AccountsWithRestoreAccessList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountAlias?: string;

  @SpeakeasyMetadata()
  accountId?: string;
}
