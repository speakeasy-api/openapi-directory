import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GitDeleteRefRequest extends SpeakeasyBase {
    owner: string;
    /**
     * ref parameter
     */
    ref: string;
    repo: string;
}
export declare class GitDeleteRefResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
