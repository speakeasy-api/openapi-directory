import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionConfiguration } from "./retentionconfiguration";
/**
 * Success
 */
export declare class DescribeRetentionConfigurationsResponse extends SpeakeasyBase {
    nextToken?: string;
    retentionConfigurations?: RetentionConfiguration[];
}
