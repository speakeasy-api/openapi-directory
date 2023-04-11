import { SpeakeasyBase } from "../../../internal/utils";
import { SimulationJob } from "./simulationjob";
/**
 * Success
 */
export declare class BatchDescribeSimulationJobResponse extends SpeakeasyBase {
    jobs?: SimulationJob[];
    unprocessedJobs?: string[];
}
