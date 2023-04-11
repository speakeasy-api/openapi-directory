import { SpeakeasyBase } from "../../../internal/utils";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";
import { ProtectedBranchAdminEnforced } from "./protectedbranchadminenforced";
import { ProtectedBranchPullRequestReview } from "./protectedbranchpullrequestreview";
import { ProtectedBranchRequiredStatusCheck } from "./protectedbranchrequiredstatuscheck";
export declare class BranchProtectionAllowDeletions extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionAllowForcePushes extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing.
 */
export declare class BranchProtectionAllowForkSyncing extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionBlockCreations extends SpeakeasyBase {
    enabled?: boolean;
}
/**
 * Whether to set the branch as read-only. If this is true, users will not be able to push to the branch.
 */
export declare class BranchProtectionLockBranch extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionRequiredConversationResolution extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionRequiredLinearHistory extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionRequiredSignatures extends SpeakeasyBase {
    enabled: boolean;
    url: string;
}
/**
 * Branch Protection
 */
export declare class BranchProtection extends SpeakeasyBase {
    allowDeletions?: BranchProtectionAllowDeletions;
    allowForcePushes?: BranchProtectionAllowForcePushes;
    /**
     * Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing.
     */
    allowForkSyncing?: BranchProtectionAllowForkSyncing;
    blockCreations?: BranchProtectionBlockCreations;
    enabled?: boolean;
    /**
     * Protected Branch Admin Enforced
     */
    enforceAdmins?: ProtectedBranchAdminEnforced;
    /**
     * Whether to set the branch as read-only. If this is true, users will not be able to push to the branch.
     */
    lockBranch?: BranchProtectionLockBranch;
    name?: string;
    protectionUrl?: string;
    requiredConversationResolution?: BranchProtectionRequiredConversationResolution;
    requiredLinearHistory?: BranchProtectionRequiredLinearHistory;
    /**
     * Protected Branch Pull Request Review
     */
    requiredPullRequestReviews?: ProtectedBranchPullRequestReview;
    requiredSignatures?: BranchProtectionRequiredSignatures;
    /**
     * Protected Branch Required Status Check
     */
    requiredStatusChecks?: ProtectedBranchRequiredStatusCheck;
    /**
     * Branch Restriction Policy
     */
    restrictions?: BranchRestrictionPolicy;
    url?: string;
}
