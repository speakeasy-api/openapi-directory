import { SpeakeasyBase } from "../../../internal/utils";
import { MemberAbilityEnum } from "./memberabilityenum";
import { MemberStatusEnum } from "./memberstatusenum";
/**
 * The member object listed by the request.
 */
export declare class MemberSummary extends SpeakeasyBase {
    abilities: MemberAbilityEnum[];
    accountId: string;
    createTime: Date;
    displayName: string;
    membershipArn?: string;
    membershipId?: string;
    status: MemberStatusEnum;
    updateTime: Date;
}
