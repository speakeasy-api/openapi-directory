import { SpeakeasyBase } from "../../../internal/utils";
import { BranchRestrictionPolicy } from "./branchrestrictionpolicy";
import { ProtectedBranchAdminEnforced } from "./protectedbranchadminenforced";
import { ProtectedBranchPullRequestReview } from "./protectedbranchpullrequestreview";
export declare class BranchProtectionRequiredConversationResolution extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class BranchProtectionRequiredSignatures extends SpeakeasyBase {
    enabled: boolean;
    url: string;
}
export declare class BranchProtectionRequiredStatusChecks extends SpeakeasyBase {
    contexts: string[];
    contextsUrl?: string;
    enforcementLevel?: string;
    strict?: boolean;
    url?: string;
}
/**
 * Branch Protection
 */
export declare class BranchProtection extends SpeakeasyBase {
    enabled?: boolean;
    /**
     * Protected Branch Admin Enforced
     */
    enforceAdmins?: ProtectedBranchAdminEnforced;
    name?: string;
    protectionUrl?: string;
    requiredConversationResolution?: BranchProtectionRequiredConversationResolution;
    /**
     * Protected Branch Pull Request Review
     */
    requiredPullRequestReviews?: ProtectedBranchPullRequestReview;
    requiredSignatures?: BranchProtectionRequiredSignatures;
    requiredStatusChecks?: BranchProtectionRequiredStatusChecks;
    /**
     * Branch Restriction Policy
     */
    restrictions?: BranchRestrictionPolicy;
    url?: string;
}
