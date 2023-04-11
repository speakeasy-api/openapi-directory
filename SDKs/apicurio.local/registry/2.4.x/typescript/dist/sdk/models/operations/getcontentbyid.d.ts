import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContentByIdRequest extends SpeakeasyBase {
    /**
     * Global identifier for a single artifact content.
     */
    contentId: number;
}
export declare class GetContentByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    /**
     * The content of one version of one artifact.
     */
    fileContent?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
