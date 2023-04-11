import { SpeakeasyBase } from "../../../internal/utils";
import { TypeConfigurationIdentifier } from "./typeconfigurationidentifier";
/**
 * Detailed information concerning an error generated during the setting of configuration data for a CloudFormation extension.
 */
export declare class BatchDescribeTypeConfigurationsError extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    /**
     * Identifying information for the configuration of a CloudFormation extension.
     */
    typeConfigurationIdentifier?: TypeConfigurationIdentifier;
}
