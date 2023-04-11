import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipDatasources } from "./membershipdatasources";
import { UnprocessedAccount } from "./unprocessedaccount";
/**
 * Success
 */
export declare class BatchGetGraphMemberDatasourcesResponse extends SpeakeasyBase {
    memberDatasources?: MembershipDatasources[];
    unprocessedAccounts?: UnprocessedAccount[];
}
