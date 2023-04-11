import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateArtifactVersionStateRequest extends SpeakeasyBase {
    updateState: shared.UpdateState;
    /**
     * The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
     */
    artifactId: string;
    /**
     * The unique identifier of a specific version of the artifact content.
     */
    version: number;
}
export declare class UpdateArtifactVersionStateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `400` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
