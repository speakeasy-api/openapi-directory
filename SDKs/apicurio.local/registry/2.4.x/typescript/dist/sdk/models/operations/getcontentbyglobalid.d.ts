import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContentByGlobalIdRequest extends SpeakeasyBase {
    /**
     * Allows the user to specify if the content should be dereferenced when being returned
     */
    dereference?: boolean;
    /**
     * Global identifier for an artifact version.
     */
    globalId: number;
}
export declare class GetContentByGlobalIdResponse extends SpeakeasyBase {
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
