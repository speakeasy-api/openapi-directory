import { SpeakeasyBase } from "../../../internal/utils";
import { SocialFriendsPlatformFriend } from "./socialfriendsplatformfriend";
export declare class SocialFriendsPlatformFriendResponse extends SpeakeasyBase {
    currentPage?: number;
    hasMore?: boolean;
    itemsPerPage?: number;
    platformFriends?: SocialFriendsPlatformFriend[];
}
