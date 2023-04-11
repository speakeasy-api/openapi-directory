import { SpeakeasyBase } from "../../../internal/utils";
import { UserGeneralUser } from "./usergeneraluser";
export declare class SocialFriendsBungieFriend extends SpeakeasyBase {
    bungieGlobalDisplayName?: string;
    bungieGlobalDisplayNameCode?: number;
    bungieNetUser?: UserGeneralUser;
    lastSeenAsBungieMembershipType?: number;
    lastSeenAsMembershipId?: number;
    onlineStatus?: number;
    onlineTitle?: number;
    relationship?: number;
}
