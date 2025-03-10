import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsListRequest extends SpeakeasyBase {
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    since?: Date;
}
export declare class GistsListResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    baseGists?: shared.BaseGist[];
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
