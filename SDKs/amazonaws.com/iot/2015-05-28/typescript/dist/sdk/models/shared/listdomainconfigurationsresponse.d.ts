import { SpeakeasyBase } from "../../../internal/utils";
import { DomainConfigurationSummary } from "./domainconfigurationsummary";
/**
 * Success
 */
export declare class ListDomainConfigurationsResponse extends SpeakeasyBase {
    domainConfigurations?: DomainConfigurationSummary[];
    nextMarker?: string;
}
