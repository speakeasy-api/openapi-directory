import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeTypeEnum } from "./computetypeenum";
import { SimulationJobStatusEnum } from "./simulationjobstatusenum";
/**
 * Summary information for a simulation job.
 */
export declare class SimulationJobSummary extends SpeakeasyBase {
    arn?: string;
    computeType?: ComputeTypeEnum;
    dataSourceNames?: string[];
    lastUpdatedAt?: Date;
    name?: string;
    robotApplicationNames?: string[];
    simulationApplicationNames?: string[];
    status?: SimulationJobStatusEnum;
}
