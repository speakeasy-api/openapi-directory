import { SpeakeasyBase } from "../../../internal/utils";
import { BranchProtection } from "./branchprotection";
import { Commit } from "./commit";
export declare class BranchWithProtectionLinks extends SpeakeasyBase {
    html: string;
    self: string;
}
/**
 * Branch With Protection
 */
export declare class BranchWithProtection extends SpeakeasyBase {
    links: BranchWithProtectionLinks;
    /**
     * Commit
     */
    commit: Commit;
    name: string;
    pattern?: string;
    protected: boolean;
    /**
     * Branch Protection
     */
    protection: BranchProtection;
    protectionUrl: string;
    requiredApprovingReviewCount?: number;
}
