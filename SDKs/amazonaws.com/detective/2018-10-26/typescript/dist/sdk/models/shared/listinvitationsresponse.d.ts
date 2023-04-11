import { SpeakeasyBase } from "../../../internal/utils";
import { MemberDetail } from "./memberdetail";
/**
 * Success
 */
export declare class ListInvitationsResponse extends SpeakeasyBase {
    invitations?: MemberDetail[];
    nextToken?: string;
}
