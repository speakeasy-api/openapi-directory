import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReferencesByContentHashRequest extends SpeakeasyBase {
    /**
     * SHA-256 content hash for a single artifact content.
     */
    contentHash: string;
}
export declare class ReferencesByContentHashResponse extends SpeakeasyBase {
    /**
     * A list containing all the references for the artifact with the given content hash.
     */
    artifactReferences?: shared.ArtifactReference[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
