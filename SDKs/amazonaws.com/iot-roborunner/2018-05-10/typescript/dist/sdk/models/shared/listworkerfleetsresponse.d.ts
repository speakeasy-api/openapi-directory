import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerFleet } from "./workerfleet";
/**
 * Success
 */
export declare class ListWorkerFleetsResponse extends SpeakeasyBase {
    /**
     * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
     */
    nextToken?: string;
    /**
     * List of worker fleets.
     */
    workerFleets?: WorkerFleet[];
}
