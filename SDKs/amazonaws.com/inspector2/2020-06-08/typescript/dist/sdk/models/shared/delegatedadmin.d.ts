import { SpeakeasyBase } from "../../../internal/utils";
import { RelationshipStatusEnum } from "./relationshipstatusenum";
/**
 * Details of the Amazon Inspector delegated administrator for your organization.
 */
export declare class DelegatedAdmin extends SpeakeasyBase {
    accountId?: string;
    relationshipStatus?: RelationshipStatusEnum;
}
