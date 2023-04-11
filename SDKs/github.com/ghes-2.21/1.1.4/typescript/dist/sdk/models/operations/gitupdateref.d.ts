import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GitUpdateRefRequestBody extends SpeakeasyBase {
    /**
     * Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work.
     */
    force?: boolean;
    /**
     * The SHA1 value to set this reference to
     */
    sha: string;
}
export declare class GitUpdateRefRequest extends SpeakeasyBase {
    requestBody: GitUpdateRefRequestBody;
    owner: string;
    /**
     * ref parameter
     */
    ref: string;
    repo: string;
}
export declare class GitUpdateRefResponse extends SpeakeasyBase {
    contentType: string;
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
