import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetArtifactFormatsResponse extends SpeakeasyBase {
    /**
     * A list of artifact formats
     */
    artifactFormats?: shared.ArtifactFormats;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
