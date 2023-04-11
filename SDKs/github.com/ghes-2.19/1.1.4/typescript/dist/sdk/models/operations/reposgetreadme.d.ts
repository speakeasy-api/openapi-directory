import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetReadmeRequest extends SpeakeasyBase {
    owner: string;
    /**
     * The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
     */
    ref?: string;
    repo: string;
}
export declare class ReposGetReadmeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    contentFile?: shared.ContentFile;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
