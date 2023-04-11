import { SpeakeasyBase } from "../../../internal/utils";
import { ActivateReadSetJobItem } from "./activatereadsetjobitem";
/**
 * Success
 */
export declare class ListReadSetActivationJobsResponse extends SpeakeasyBase {
    activationJobs?: ActivateReadSetJobItem[];
    nextToken?: string;
}
