import { SpeakeasyBase } from "../../../internal/utils";
import { CpuVendorArchitectureEnum } from "./cpuvendorarchitectureenum";
/**
 * Describes the recommendation preferences to return in the response of a <a>GetAutoScalingGroupRecommendations</a>, <a>GetEC2InstanceRecommendations</a>, and <a>GetEC2RecommendationProjectedMetrics</a> request.
 */
export declare class RecommendationPreferences extends SpeakeasyBase {
    cpuVendorArchitectures?: CpuVendorArchitectureEnum[];
}
