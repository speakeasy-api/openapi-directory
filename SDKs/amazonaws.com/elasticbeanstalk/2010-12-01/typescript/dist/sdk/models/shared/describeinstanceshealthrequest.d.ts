import { SpeakeasyBase } from "../../../internal/utils";
import { InstancesHealthAttributeEnum } from "./instanceshealthattributeenum";
/**
 * Parameters for a call to <code>DescribeInstancesHealth</code>.
 */
export declare class DescribeInstancesHealthRequest extends SpeakeasyBase {
    attributeNames?: InstancesHealthAttributeEnum[];
    environmentId?: string;
    environmentName?: string;
    nextToken?: string;
}
