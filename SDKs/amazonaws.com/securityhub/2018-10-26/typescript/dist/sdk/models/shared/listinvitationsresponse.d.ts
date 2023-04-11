import { SpeakeasyBase } from "../../../internal/utils";
import { Invitation } from "./invitation";
/**
 * Success
 */
export declare class ListInvitationsResponse extends SpeakeasyBase {
    invitations?: Invitation[];
    nextToken?: string;
}
