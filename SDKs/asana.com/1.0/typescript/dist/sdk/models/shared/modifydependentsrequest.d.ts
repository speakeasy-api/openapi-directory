import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set of dependent tasks.
 */
export declare class ModifyDependentsRequest extends SpeakeasyBase {
    /**
     * An array of task gids that are dependents of the given task.
     */
    dependents?: string[];
}
