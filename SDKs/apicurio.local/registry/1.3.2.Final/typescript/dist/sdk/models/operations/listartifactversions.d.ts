import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListArtifactVersionsRequest extends SpeakeasyBase {
    /**
     * The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
     */
    artifactId: string;
}
export declare class ListArtifactVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of all artifact versions (just the version IDs).
     */
    listArtifactVersions200ApplicationJSONInt64Integers?: number[];
}
