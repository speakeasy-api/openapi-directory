import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityConfigurationSummary } from "./securityconfigurationsummary";
/**
 * Success
 */
export declare class ListSecurityConfigurationsOutput extends SpeakeasyBase {
    marker?: string;
    securityConfigurations?: SecurityConfigurationSummary[];
}
