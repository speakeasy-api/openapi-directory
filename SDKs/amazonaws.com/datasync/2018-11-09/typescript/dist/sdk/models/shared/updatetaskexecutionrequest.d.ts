import { SpeakeasyBase } from "../../../internal/utils";
import { Options } from "./options";
export declare class UpdateTaskExecutionRequest extends SpeakeasyBase {
    /**
     * <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>
     */
    options: Options;
    taskExecutionArn: string;
}
