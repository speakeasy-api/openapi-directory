import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GitGetTreeRequest extends SpeakeasyBase {
    owner: string;
    /**
     * Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `"true"`, and `"false"`. Omit this parameter to prevent recursively returning objects or subtrees.
     */
    recursive?: string;
    repo: string;
    treeSha: string;
}
export declare class GitGetTreeResponse extends SpeakeasyBase {
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
    gitTree?: shared.GitTree;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
