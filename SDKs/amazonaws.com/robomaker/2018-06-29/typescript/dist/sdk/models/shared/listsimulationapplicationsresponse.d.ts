import { SpeakeasyBase } from "../../../internal/utils";
import { SimulationApplicationSummary } from "./simulationapplicationsummary";
/**
 * Success
 */
export declare class ListSimulationApplicationsResponse extends SpeakeasyBase {
    nextToken?: string;
    simulationApplicationSummaries?: SimulationApplicationSummary[];
}
