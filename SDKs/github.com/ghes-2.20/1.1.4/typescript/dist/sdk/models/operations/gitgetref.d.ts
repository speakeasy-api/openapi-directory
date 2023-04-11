import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GitGetRefRequest extends SpeakeasyBase {
    owner: string;
    /**
     * ref parameter
     */
    ref: string;
    repo: string;
}
export declare class GitGetRefResponse extends SpeakeasyBase {
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
    gitRef?: shared.GitRef;
}
