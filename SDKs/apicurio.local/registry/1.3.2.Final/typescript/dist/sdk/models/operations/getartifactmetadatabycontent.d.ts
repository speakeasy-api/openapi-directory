import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetArtifactMetaDataByContentRequest extends SpeakeasyBase {
    /**
     * The content of an artifact version.
     */
    requestBody: Uint8Array;
    /**
     * The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
     */
    artifactId: string;
}
export declare class GetArtifactMetaDataByContentResponse extends SpeakeasyBase {
    /**
     * The metadata of the artifact version matching the provided content.
     */
    artifactMetaData?: shared.ArtifactMetaData;
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
