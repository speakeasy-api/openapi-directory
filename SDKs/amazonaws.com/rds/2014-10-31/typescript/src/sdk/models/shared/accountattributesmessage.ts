import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountQuotaList } from "./accountquotalist";



// AccountAttributesMessage
/** 
 * Data returned by the <b>DescribeAccountAttributes</b> action.
**/
export class AccountAttributesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AccountQuotaList })
  accountQuotas?: AccountQuotaList[];
}
