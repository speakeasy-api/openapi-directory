import { SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { TaskDefinition } from "./taskdefinition";
/**
 * Success
 */
export declare class DeleteTaskDefinitionsResponse extends SpeakeasyBase {
    failures?: Failure[];
    taskDefinitions?: TaskDefinition[];
}
