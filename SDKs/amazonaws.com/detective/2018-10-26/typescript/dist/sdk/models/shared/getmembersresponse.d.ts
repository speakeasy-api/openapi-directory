import { SpeakeasyBase } from "../../../internal/utils";
import { MemberDetail } from "./memberdetail";
import { UnprocessedAccount } from "./unprocessedaccount";
/**
 * Success
 */
export declare class GetMembersResponse extends SpeakeasyBase {
    memberDetails?: MemberDetail[];
    unprocessedAccounts?: UnprocessedAccount[];
}
