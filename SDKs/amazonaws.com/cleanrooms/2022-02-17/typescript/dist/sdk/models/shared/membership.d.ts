import { SpeakeasyBase } from "../../../internal/utils";
import { MemberAbilityEnum } from "./memberabilityenum";
import { MembershipQueryLogStatusEnum } from "./membershipquerylogstatusenum";
import { MembershipStatusEnum } from "./membershipstatusenum";
/**
 * The membership object.
 */
export declare class Membership extends SpeakeasyBase {
    arn: string;
    collaborationArn: string;
    collaborationCreatorAccountId: string;
    collaborationCreatorDisplayName: string;
    collaborationId: string;
    collaborationName: string;
    createTime: Date;
    id: string;
    memberAbilities: MemberAbilityEnum[];
    queryLogStatus: MembershipQueryLogStatusEnum;
    status: MembershipStatusEnum;
    updateTime: Date;
}
