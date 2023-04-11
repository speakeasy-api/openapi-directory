import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicyStats } from "./accesspolicystats";
import { SecurityConfigStats } from "./securityconfigstats";
import { SecurityPolicyStats } from "./securitypolicystats";
/**
 * Success
 */
export declare class GetPoliciesStatsResponse extends SpeakeasyBase {
    accessPolicyStats?: AccessPolicyStats;
    securityConfigStats?: SecurityConfigStats;
    securityPolicyStats?: SecurityPolicyStats;
    totalPolicyCount?: number;
}
