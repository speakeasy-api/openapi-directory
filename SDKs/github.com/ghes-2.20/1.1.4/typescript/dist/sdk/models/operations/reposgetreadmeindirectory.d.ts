import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetReadmeInDirectoryRequest extends SpeakeasyBase {
    /**
     * The alternate path to look for a README file
     */
    dir: string;
    owner: string;
    /**
     * The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
     */
    ref?: string;
    repo: string;
}
export declare class ReposGetReadmeInDirectoryResponse extends SpeakeasyBase {
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
