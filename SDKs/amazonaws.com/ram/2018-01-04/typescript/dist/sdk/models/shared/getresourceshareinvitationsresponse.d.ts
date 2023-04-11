import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareInvitation } from "./resourceshareinvitation";
/**
 * Success
 */
export declare class GetResourceShareInvitationsResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceShareInvitations?: ResourceShareInvitation[];
}
