import { SpeakeasyBase } from "../../../internal/utils";
import { MemberDetail } from "./memberdetail";
import { UnprocessedAccount } from "./unprocessedaccount";
/**
 * Success
 */
export declare class CreateMembersResponse extends SpeakeasyBase {
    members?: MemberDetail[];
    unprocessedAccounts?: UnprocessedAccount[];
}
