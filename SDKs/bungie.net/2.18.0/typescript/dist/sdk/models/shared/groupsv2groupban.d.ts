import { SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";
import { UserUserInfoCard } from "./useruserinfocard";
export declare class GroupsV2GroupBan extends SpeakeasyBase {
    /**
     * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
     */
    bungieNetUserInfo?: UserUserInfoCard;
    comment?: string;
    /**
     * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
     */
    createdBy?: UserUserInfoCard;
    dateBanned?: Date;
    dateExpires?: Date;
    destinyUserInfo?: GroupsV2GroupUserInfoCard;
    groupId?: number;
    /**
     * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
     */
    lastModifiedBy?: UserUserInfoCard;
}
