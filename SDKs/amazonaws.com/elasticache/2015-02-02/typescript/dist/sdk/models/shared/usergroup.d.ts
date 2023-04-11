import { SpeakeasyBase } from "../../../internal/utils";
import { UserGroupPendingChanges } from "./usergrouppendingchanges";
/**
 * Success
 */
export declare class UserGroup extends SpeakeasyBase {
    arn?: string;
    engine?: string;
    minimumEngineVersion?: string;
    pendingChanges?: UserGroupPendingChanges;
    replicationGroups?: string[];
    status?: string;
    userGroupId?: string;
    userIds?: string[];
}
