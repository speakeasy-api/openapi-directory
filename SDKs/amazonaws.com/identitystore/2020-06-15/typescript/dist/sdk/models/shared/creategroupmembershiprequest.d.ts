import { SpeakeasyBase } from "../../../internal/utils";
import { MemberId } from "./memberid";
export declare class CreateGroupMembershipRequest extends SpeakeasyBase {
    groupId: string;
    identityStoreId: string;
    memberId: MemberId;
}
