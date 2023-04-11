import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetArtifactMetaDataByGlobalIdRequest extends SpeakeasyBase {
    /**
     * Global identifier for an artifact version.
     */
    globalId: number;
}
export declare class GetArtifactMetaDataByGlobalIdResponse extends SpeakeasyBase {
    /**
     * The artifact's metadata.
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
