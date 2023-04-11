import { SpeakeasyBase } from "../../../internal/utils";
import { RelationshipStatusEnum } from "./relationshipstatusenum";
/**
 * Success
 */
export declare class GetMemberResponse extends SpeakeasyBase {
    accountId?: string;
    administratorAccountId?: string;
    arn?: string;
    email?: string;
    invitedAt?: Date;
    masterAccountId?: string;
    relationshipStatus?: RelationshipStatusEnum;
    tags?: Record<string, string>;
    updatedAt?: Date;
}
