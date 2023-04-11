import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchVersionsRequest extends SpeakeasyBase {
    /**
     * The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
     */
    artifactId: string;
    /**
     * The number of versions to return.
     */
    limit: number;
    /**
     * The number of versions to skip before starting to collect the result set.
     */
    offset: number;
}
export declare class SearchVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * On a successful response, returns a result set of versions - one for each version
     *
     * @remarks
     * of the artifact.
     */
    versionSearchResults?: shared.VersionSearchResults;
}
