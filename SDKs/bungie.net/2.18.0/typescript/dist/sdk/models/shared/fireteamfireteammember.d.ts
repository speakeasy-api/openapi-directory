import { SpeakeasyBase } from "../../../internal/utils";
import { FireteamFireteamUserInfoCard } from "./fireteamfireteamuserinfocard";
import { UserUserInfoCard } from "./useruserinfocard";
export declare class FireteamFireteamMember extends SpeakeasyBase {
    /**
     * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
     */
    bungieNetUserInfo?: UserUserInfoCard;
    characterId?: number;
    dateJoined?: Date;
    destinyUserInfo?: FireteamFireteamUserInfoCard;
    hasMicrophone?: boolean;
    lastPlatformInviteAttemptDate?: Date;
    lastPlatformInviteAttemptResult?: number;
}
