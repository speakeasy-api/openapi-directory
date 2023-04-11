import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetLatestPagesBuildRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetLatestPagesBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pageBuild?: shared.PageBuild;
}
