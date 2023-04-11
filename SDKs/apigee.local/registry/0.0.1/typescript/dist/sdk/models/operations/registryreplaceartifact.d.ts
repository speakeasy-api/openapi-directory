import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryReplaceArtifactRequest extends SpeakeasyBase {
    artifactInput: shared.ArtifactInput;
    /**
     * The artifact id.
     */
    artifact: string;
    /**
     * The location id.
     */
    location: string;
    /**
     * The project id.
     */
    project: string;
}
export declare class RegistryReplaceArtifactResponse extends SpeakeasyBase {
    /**
     * OK
     */
    artifact?: shared.ArtifactOutput;
    contentType: string;
    /**
     * Default error response
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
