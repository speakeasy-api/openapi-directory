import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentHealthAttributeEnum } from "./environmenthealthattributeenum";
/**
 * See the example below to learn how to create a request body.
 */
export declare class DescribeEnvironmentHealthRequest extends SpeakeasyBase {
    attributeNames?: EnvironmentHealthAttributeEnum[];
    environmentId?: string;
    environmentName?: string;
}
