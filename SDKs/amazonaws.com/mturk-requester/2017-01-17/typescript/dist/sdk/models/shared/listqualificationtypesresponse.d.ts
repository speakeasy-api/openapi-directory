import { SpeakeasyBase } from "../../../internal/utils";
import { QualificationType } from "./qualificationtype";
/**
 * Success
 */
export declare class ListQualificationTypesResponse extends SpeakeasyBase {
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
     */
    nextToken?: string;
    numResults?: number;
    qualificationTypes?: QualificationType[];
}
