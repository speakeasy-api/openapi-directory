import { SpeakeasyBase } from "../../../internal/utils";
import { Worker } from "./worker";
/**
 * Success
 */
export declare class ListWorkersResponse extends SpeakeasyBase {
    /**
     * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
     */
    nextToken?: string;
    /**
     * List of workers.
     */
    workers?: Worker[];
}
