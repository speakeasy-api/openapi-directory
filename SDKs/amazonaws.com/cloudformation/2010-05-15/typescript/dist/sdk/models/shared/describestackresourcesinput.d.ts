import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input for <a>DescribeStackResources</a> action.
 */
export declare class DescribeStackResourcesInput extends SpeakeasyBase {
    logicalResourceId?: string;
    physicalResourceId?: string;
    stackName?: string;
}
