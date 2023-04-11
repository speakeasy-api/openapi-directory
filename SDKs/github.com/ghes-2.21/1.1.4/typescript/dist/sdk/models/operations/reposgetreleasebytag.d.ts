import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetReleaseByTagRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    /**
     * tag parameter
     */
    tag: string;
}
export declare class ReposGetReleaseByTagResponse extends SpeakeasyBase {
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
    release?: shared.Release;
}
