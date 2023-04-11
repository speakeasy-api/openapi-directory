import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetLatestReleaseRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetLatestReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    release?: shared.Release;
}
