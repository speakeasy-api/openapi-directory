import { SpeakeasyBase } from "../../../internal/utils";
import { SimulationJobBatchSummary } from "./simulationjobbatchsummary";
/**
 * Success
 */
export declare class ListSimulationJobBatchesResponse extends SpeakeasyBase {
    nextToken?: string;
    simulationJobBatchSummaries?: SimulationJobBatchSummary[];
}
