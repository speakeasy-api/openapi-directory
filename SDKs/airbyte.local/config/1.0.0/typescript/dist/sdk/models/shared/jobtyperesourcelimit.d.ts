import { SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";
import { ResourceRequirements } from "./resourcerequirements";
/**
 * sets resource requirements for a specific job type for an actor definition. these values override the default, if both are set.
 */
export declare class JobTypeResourceLimit extends SpeakeasyBase {
    /**
     * enum that describes the different types of jobs that the platform runs.
     */
    jobType: JobTypeEnum;
    /**
     * optional resource requirements to run workers (blank for unbounded allocations)
     */
    resourceRequirements: ResourceRequirements;
}
