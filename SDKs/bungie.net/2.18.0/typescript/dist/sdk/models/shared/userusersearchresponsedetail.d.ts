import { SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";
export declare class UserUserSearchResponseDetail extends SpeakeasyBase {
    bungieGlobalDisplayName?: string;
    bungieGlobalDisplayNameCode?: number;
    bungieNetMembershipId?: number;
    destinyMemberships?: UserUserInfoCard[];
}
