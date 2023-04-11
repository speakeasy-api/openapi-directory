import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsBillingUsageMinutesUsedBreakdown extends SpeakeasyBase {
    /**
     * Total minutes used on macOS runner machines.
     */
    macos?: number;
    /**
     * Total minutes used on Ubuntu runner machines.
     */
    ubuntu?: number;
    /**
     * Total minutes used on Windows runner machines.
     */
    windows?: number;
    /**
     * Total minutes used on macOS 12 core runner machines.
     */
    macos12Core?: number;
    /**
     * Total minutes used on all runner machines.
     */
    total?: number;
    /**
     * Total minutes used on Ubuntu 16 core runner machines.
     */
    ubuntu16Core?: number;
    /**
     * Total minutes used on Ubuntu 32 core runner machines.
     */
    ubuntu32Core?: number;
    /**
     * Total minutes used on Ubuntu 4 core runner machines.
     */
    ubuntu4Core?: number;
    /**
     * Total minutes used on Ubuntu 64 core runner machines.
     */
    ubuntu64Core?: number;
    /**
     * Total minutes used on Ubuntu 8 core runner machines.
     */
    ubuntu8Core?: number;
    /**
     * Total minutes used on Windows 16 core runner machines.
     */
    windows16Core?: number;
    /**
     * Total minutes used on Windows 32 core runner machines.
     */
    windows32Core?: number;
    /**
     * Total minutes used on Windows 4 core runner machines.
     */
    windows4Core?: number;
    /**
     * Total minutes used on Windows 64 core runner machines.
     */
    windows64Core?: number;
    /**
     * Total minutes used on Windows 8 core runner machines.
     */
    windows8Core?: number;
}
/**
 * Response
 */
export declare class ActionsBillingUsage extends SpeakeasyBase {
    /**
     * The amount of free GitHub Actions minutes available.
     */
    includedMinutes: number;
    minutesUsedBreakdown: ActionsBillingUsageMinutesUsedBreakdown;
    /**
     * The sum of the free and paid GitHub Actions minutes used.
     */
    totalMinutesUsed: number;
    /**
     * The total paid GitHub Actions minutes used.
     */
    totalPaidMinutesUsed: number;
}
