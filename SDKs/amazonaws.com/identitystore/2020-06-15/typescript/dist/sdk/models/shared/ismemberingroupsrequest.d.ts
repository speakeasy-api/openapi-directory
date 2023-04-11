import { SpeakeasyBase } from "../../../internal/utils";
import { MemberId } from "./memberid";
export declare class IsMemberInGroupsRequest extends SpeakeasyBase {
    groupIds: string[];
    identityStoreId: string;
    memberId: MemberId;
}
