import { SpeakeasyBase } from "../../../internal/utils";
import { MemberId } from "./memberid";
export declare class ListGroupMembershipsForMemberRequest extends SpeakeasyBase {
    identityStoreId: string;
    maxResults?: number;
    memberId: MemberId;
    nextToken?: string;
}
