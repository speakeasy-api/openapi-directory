import { SpeakeasyBase } from "../../../internal/utils";
import { MemberAccount } from "./memberaccount";
/**
 * Success
 */
export declare class ListMemberAccountsResult extends SpeakeasyBase {
    memberAccounts?: MemberAccount[];
    nextToken?: string;
}
