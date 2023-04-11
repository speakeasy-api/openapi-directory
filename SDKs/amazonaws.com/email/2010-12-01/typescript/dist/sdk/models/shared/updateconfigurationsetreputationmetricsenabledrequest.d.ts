import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to modify the reputation metric publishing settings for a configuration set.
 */
export declare class UpdateConfigurationSetReputationMetricsEnabledRequest extends SpeakeasyBase {
    configurationSetName: string;
    enabled: boolean;
}
