import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListQualificationTypesRequest extends SpeakeasyBase {
    maxResults?: number;
    mustBeOwnedByCaller?: boolean;
    mustBeRequestable: boolean;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
     */
    nextToken?: string;
    query?: string;
}
