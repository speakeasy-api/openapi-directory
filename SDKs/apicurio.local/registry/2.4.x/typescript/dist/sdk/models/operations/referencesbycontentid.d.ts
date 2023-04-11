import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReferencesByContentIdRequest extends SpeakeasyBase {
    /**
     * Global identifier for a single artifact content.
     */
    contentId: number;
}
export declare class ReferencesByContentIdResponse extends SpeakeasyBase {
    /**
     * A list containing all the references for the artifact with the given content id.
     */
    artifactReferences?: shared.ArtifactReference[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
