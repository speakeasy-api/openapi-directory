import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryCreateArtifactRequest extends SpeakeasyBase {
    artifactInput: shared.ArtifactInput;
    /**
     * Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.
     */
    artifactId?: string;
    /**
     * The location id.
     */
    location: string;
    /**
     * The project id.
     */
    project: string;
}
export declare class RegistryCreateArtifactResponse extends SpeakeasyBase {
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
