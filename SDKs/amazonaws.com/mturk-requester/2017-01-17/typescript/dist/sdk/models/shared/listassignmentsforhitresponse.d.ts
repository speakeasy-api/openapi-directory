import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
/**
 * Success
 */
export declare class ListAssignmentsForHITResponse extends SpeakeasyBase {
    assignments?: Assignment[];
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
     */
    nextToken?: string;
    numResults?: number;
}
