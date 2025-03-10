import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GitCreateRefRequestBody extends SpeakeasyBase {
    key?: string;
    /**
     * The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
     */
    ref: string;
    /**
     * The SHA1 value for this reference.
     */
    sha: string;
}
export declare class GitCreateRefRequest extends SpeakeasyBase {
    requestBody: GitCreateRefRequestBody;
    owner: string;
    repo: string;
}
export declare class GitCreateRefResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    gitRef?: shared.GitRef;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
