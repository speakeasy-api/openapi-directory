import { SpeakeasyBase } from "../../../internal/utils";
import { AccountQuotaList } from "./accountquotalist";
/**
 * Data returned by the <b>DescribeAccountAttributes</b> action.
 */
export declare class AccountAttributesMessage extends SpeakeasyBase {
    accountQuotas?: AccountQuotaList[];
}
