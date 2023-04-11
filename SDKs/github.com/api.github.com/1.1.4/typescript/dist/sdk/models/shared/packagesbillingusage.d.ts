import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response
 */
export declare class PackagesBillingUsage extends SpeakeasyBase {
    /**
     * Free storage space (GB) for GitHub Packages.
     */
    includedGigabytesBandwidth: number;
    /**
     * Sum of the free and paid storage space (GB) for GitHuub Packages.
     */
    totalGigabytesBandwidthUsed: number;
    /**
     * Total paid storage space (GB) for GitHuub Packages.
     */
    totalPaidGigabytesBandwidthUsed: number;
}
