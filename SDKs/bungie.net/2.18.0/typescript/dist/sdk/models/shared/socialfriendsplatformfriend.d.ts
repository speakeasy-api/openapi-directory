import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SocialFriendsPlatformFriendDestinyMembershipTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Ten = "10",
    TwoHundredAndFiftyFour = "254",
    Minus1 = "-1"
}
export declare class SocialFriendsPlatformFriend extends SpeakeasyBase {
    bungieGlobalDisplayName?: string;
    bungieGlobalDisplayNameCode?: number;
    bungieNetMembershipId?: number;
    destinyMembershipId?: number;
    destinyMembershipType?: SocialFriendsPlatformFriendDestinyMembershipTypeEnum;
    friendPlatform?: number;
    platformDisplayName?: string;
}
