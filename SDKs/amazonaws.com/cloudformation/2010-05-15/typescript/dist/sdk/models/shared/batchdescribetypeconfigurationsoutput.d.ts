import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDescribeTypeConfigurationsError } from "./batchdescribetypeconfigurationserror";
import { TypeConfigurationDetails } from "./typeconfigurationdetails";
import { TypeConfigurationIdentifier } from "./typeconfigurationidentifier";
/**
 * Success
 */
export declare class BatchDescribeTypeConfigurationsOutput extends SpeakeasyBase {
    errors?: BatchDescribeTypeConfigurationsError[];
    typeConfigurations?: TypeConfigurationDetails[];
    unprocessedTypeConfigurations?: TypeConfigurationIdentifier[];
}
