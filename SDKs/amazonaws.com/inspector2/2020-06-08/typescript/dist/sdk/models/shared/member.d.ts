import { SpeakeasyBase } from "../../../internal/utils";
import { RelationshipStatusEnum } from "./relationshipstatusenum";
/**
 * Details on a member account in your organization.
 */
export declare class Member extends SpeakeasyBase {
    accountId?: string;
    delegatedAdminAccountId?: string;
    relationshipStatus?: RelationshipStatusEnum;
    updatedAt?: Date;
}
