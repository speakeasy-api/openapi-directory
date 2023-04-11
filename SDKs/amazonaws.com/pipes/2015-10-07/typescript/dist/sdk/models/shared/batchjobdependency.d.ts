import { SpeakeasyBase } from "../../../internal/utils";
import { BatchJobDependencyTypeEnum } from "./batchjobdependencytypeenum";
/**
 * An object that represents an Batch job dependency.
 */
export declare class BatchJobDependency extends SpeakeasyBase {
    jobId?: string;
    type?: BatchJobDependencyTypeEnum;
}
