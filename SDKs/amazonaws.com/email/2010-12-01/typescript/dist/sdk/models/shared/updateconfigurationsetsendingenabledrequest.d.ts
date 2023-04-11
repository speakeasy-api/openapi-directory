import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to enable or disable the email sending capabilities for a specific configuration set.
 */
export declare class UpdateConfigurationSetSendingEnabledRequest extends SpeakeasyBase {
    configurationSetName: string;
    enabled: boolean;
}
