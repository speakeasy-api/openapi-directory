import { SpeakeasyBase } from "../../../internal/utils";
import { UnprocessedAccount } from "./unprocessedaccount";
/**
 * Success
 */
export declare class DeleteMembersResponse extends SpeakeasyBase {
    accountIds?: string[];
    unprocessedAccounts?: UnprocessedAccount[];
}
