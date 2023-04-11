import { SpeakeasyBase } from "../../../internal/utils";
import { MemberId } from "./memberid";
export declare class GetGroupMembershipIdRequest extends SpeakeasyBase {
    groupId: string;
    identityStoreId: string;
    memberId: MemberId;
}
