import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateArtifactMetaDataRequest extends SpeakeasyBase {
    /**
     * Updated artifact metadata.
     */
    editableMetaData: shared.EditableMetaData;
    /**
     * The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
     */
    artifactId: string;
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    groupId: string;
}
export declare class UpdateArtifactMetaDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
