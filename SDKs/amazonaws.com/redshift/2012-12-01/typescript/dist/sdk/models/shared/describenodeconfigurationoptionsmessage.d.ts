import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";
import { NodeConfigurationOptionsFilterNameEnum } from "./nodeconfigurationoptionsfilternameenum";
import { OperatorTypeEnum } from "./operatortypeenum";
/**
 * A set of elements to filter the returned node configurations.
 */
export declare class DescribeNodeConfigurationOptionsMessageFilters extends SpeakeasyBase {
    name?: NodeConfigurationOptionsFilterNameEnum;
    operator?: OperatorTypeEnum;
    values?: string[];
}
export declare class DescribeNodeConfigurationOptionsMessage extends SpeakeasyBase {
    actionType: ActionTypeEnum;
    clusterIdentifier?: string;
    filters?: DescribeNodeConfigurationOptionsMessageFilters[];
    marker?: string;
    maxRecords?: number;
    ownerAccount?: string;
    snapshotArn?: string;
    snapshotIdentifier?: string;
}
