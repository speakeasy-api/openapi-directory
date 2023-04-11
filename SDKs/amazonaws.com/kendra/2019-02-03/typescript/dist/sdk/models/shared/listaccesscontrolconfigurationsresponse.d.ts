import { SpeakeasyBase } from "../../../internal/utils";
import { AccessControlConfigurationSummary } from "./accesscontrolconfigurationsummary";
/**
 * Success
 */
export declare class ListAccessControlConfigurationsResponse extends SpeakeasyBase {
    accessControlConfigurations: AccessControlConfigurationSummary[];
    nextToken?: string;
}
