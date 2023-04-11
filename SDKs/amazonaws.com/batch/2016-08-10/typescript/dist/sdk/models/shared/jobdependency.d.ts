import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayJobDependencyEnum } from "./arrayjobdependencyenum";
/**
 * An object that represents an Batch job dependency.
 */
export declare class JobDependency extends SpeakeasyBase {
    jobId?: string;
    type?: ArrayJobDependencyEnum;
}
