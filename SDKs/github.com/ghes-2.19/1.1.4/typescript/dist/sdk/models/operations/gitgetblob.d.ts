import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GitGetBlobRequest extends SpeakeasyBase {
    fileSha: string;
    owner: string;
    repo: string;
}
export declare class GitGetBlobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    blob?: shared.Blob;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
