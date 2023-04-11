import { SpeakeasyBase } from "../../../internal/utils";
import { IPSetMetadata } from "./ipsetmetadata";
/**
 * Summarizes the CIDR blocks used by the IP set references in a firewall. Network Firewall calculates the number of CIDRs by taking an aggregated count of all CIDRs used by the IP sets you are referencing.
 */
export declare class CIDRSummary extends SpeakeasyBase {
    availableCIDRCount?: number;
    ipSetReferences?: Record<string, IPSetMetadata>;
    utilizedCIDRCount?: number;
}
