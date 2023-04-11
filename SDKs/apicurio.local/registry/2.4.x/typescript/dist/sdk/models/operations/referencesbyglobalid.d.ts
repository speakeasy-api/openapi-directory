import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReferencesByGlobalIdRequest extends SpeakeasyBase {
    /**
     * Global identifier for an artifact version.
     */
    globalId: number;
}
export declare class ReferencesByGlobalIdResponse extends SpeakeasyBase {
    /**
     * A list containing all the references for the artifact with the given global id.
     */
    artifactReferences?: shared.ArtifactReference[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
