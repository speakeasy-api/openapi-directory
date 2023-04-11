import { SpeakeasyBase } from "../../../internal/utils";
import { DelegatedAdminAccount } from "./delegatedadminaccount";
/**
 * Success
 */
export declare class ListDelegatedAdminAccountsResponse extends SpeakeasyBase {
    delegatedAdminAccounts?: DelegatedAdminAccount[];
    nextToken?: string;
}
