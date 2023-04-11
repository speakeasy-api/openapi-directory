import { SpeakeasyBase } from "../../../internal/utils";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";
import { Integration } from "./integration";
import { SimpleUser } from "./simpleuser";
import { StatusCheckPolicy } from "./statuscheckpolicy";
import { Team } from "./team";
export declare class ProtectedBranchAllowDeletions extends SpeakeasyBase {
    enabled: boolean;
}
export declare class ProtectedBranchAllowForcePushes extends SpeakeasyBase {
    enabled: boolean;
}
/**
 * Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing.
 */
export declare class ProtectedBranchAllowForkSyncing extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class ProtectedBranchBlockCreations extends SpeakeasyBase {
    enabled: boolean;
}
export declare class ProtectedBranchEnforceAdmins extends SpeakeasyBase {
    enabled: boolean;
    url: string;
}
/**
 * Whether to set the branch as read-only. If this is true, users will not be able to push to the branch.
 */
export declare class ProtectedBranchLockBranch extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class ProtectedBranchRequiredConversationResolution extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class ProtectedBranchRequiredLinearHistory extends SpeakeasyBase {
    enabled: boolean;
}
export declare class ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances extends SpeakeasyBase {
    apps?: Integration[];
    teams: Team[];
    users: SimpleUser[];
}
export declare class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions extends SpeakeasyBase {
    apps?: Integration[];
    teams: Team[];
    teamsUrl: string;
    url: string;
    users: SimpleUser[];
    usersUrl: string;
}
export declare class ProtectedBranchRequiredPullRequestReviews extends SpeakeasyBase {
    bypassPullRequestAllowances?: ProtectedBranchRequiredPullRequestReviewsBypassPullRequestAllowances;
    dismissStaleReviews?: boolean;
    dismissalRestrictions?: ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions;
    requireCodeOwnerReviews?: boolean;
    /**
     * Whether the most recent push must be approved by someone other than the person who pushed it.
     */
    requireLastPushApproval?: boolean;
    requiredApprovingReviewCount?: number;
    url: string;
}
export declare class ProtectedBranchRequiredSignatures extends SpeakeasyBase {
    enabled: boolean;
    url: string;
}
/**
 * Branch protections protect branches
 */
export declare class ProtectedBranch extends SpeakeasyBase {
    allowDeletions?: ProtectedBranchAllowDeletions;
    allowForcePushes?: ProtectedBranchAllowForcePushes;
    /**
     * Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing.
     */
    allowForkSyncing?: ProtectedBranchAllowForkSyncing;
    blockCreations?: ProtectedBranchBlockCreations;
    enforceAdmins?: ProtectedBranchEnforceAdmins;
    /**
     * Whether to set the branch as read-only. If this is true, users will not be able to push to the branch.
     */
    lockBranch?: ProtectedBranchLockBranch;
    requiredConversationResolution?: ProtectedBranchRequiredConversationResolution;
    requiredLinearHistory?: ProtectedBranchRequiredLinearHistory;
    requiredPullRequestReviews?: ProtectedBranchRequiredPullRequestReviews;
    requiredSignatures?: ProtectedBranchRequiredSignatures;
    /**
     * Status Check Policy
     */
    requiredStatusChecks?: StatusCheckPolicy;
    /**
     * Branch Restriction Policy
     */
    restrictions?: BranchRestrictionPolicy;
    url: string;
}
