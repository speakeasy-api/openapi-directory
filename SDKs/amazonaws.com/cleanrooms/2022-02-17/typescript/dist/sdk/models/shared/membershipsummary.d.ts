import { SpeakeasyBase } from "../../../internal/utils";
import { MemberAbilityEnum } from "./memberabilityenum";
import { MembershipStatusEnum } from "./membershipstatusenum";
/**
 * The membership object listed by the request.
 */
export declare class MembershipSummary extends SpeakeasyBase {
    arn: string;
    collaborationArn: string;
    collaborationCreatorAccountId: string;
    collaborationCreatorDisplayName: string;
    collaborationId: string;
    collaborationName: string;
    createTime: Date;
    id: string;
    memberAbilities: MemberAbilityEnum[];
    status: MembershipStatusEnum;
    updateTime: Date;
}
