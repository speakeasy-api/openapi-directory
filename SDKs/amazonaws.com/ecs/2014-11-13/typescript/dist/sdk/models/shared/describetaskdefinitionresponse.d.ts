import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TaskDefinition } from "./taskdefinition";
/**
 * Success
 */
export declare class DescribeTaskDefinitionResponse extends SpeakeasyBase {
    tags?: Tag[];
    taskDefinition?: TaskDefinition;
}
