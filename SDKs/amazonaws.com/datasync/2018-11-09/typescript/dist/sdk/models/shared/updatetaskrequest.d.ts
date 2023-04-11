import { SpeakeasyBase } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskSchedule } from "./taskschedule";
/**
 * UpdateTaskResponse
 */
export declare class UpdateTaskRequest extends SpeakeasyBase {
    cloudWatchLogGroupArn?: string;
    excludes?: FilterRule[];
    includes?: FilterRule[];
    name?: string;
    /**
     * <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>
     */
    options?: Options;
    schedule?: TaskSchedule;
    taskArn: string;
}
