import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetArtifactVersionMetaDataByContentRequest extends SpeakeasyBase {
    /**
     * The content of an artifact version.
     */
    requestBody: Uint8Array;
    /**
     * The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
     */
    artifactId: string;
    /**
     * Parameter that can be set to `true` to indicate that the server should "canonicalize" the content when searching for a matching version.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.
     */
    canonical?: boolean;
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    groupId: string;
}
export declare class GetArtifactVersionMetaDataByContentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The metadata of the artifact version matching the provided content.
     */
    versionMetaData?: shared.VersionMetaData;
}
