import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GitCreateBlobRequestBody extends SpeakeasyBase {
    /**
     * The new blob's content.
     */
    content: string;
    /**
     * The encoding used for `content`. Currently, `"utf-8"` and `"base64"` are supported.
     */
    encoding?: string;
}
export declare class GitCreateBlobRequest extends SpeakeasyBase {
    requestBody: GitCreateBlobRequestBody;
    owner: string;
    repo: string;
}
export declare class GitCreateBlobResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    shortBlob?: shared.ShortBlob;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
