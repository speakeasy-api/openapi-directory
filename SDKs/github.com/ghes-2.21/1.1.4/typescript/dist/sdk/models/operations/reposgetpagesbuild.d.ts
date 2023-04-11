import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetPagesBuildRequest extends SpeakeasyBase {
    buildId: number;
    owner: string;
    repo: string;
}
export declare class ReposGetPagesBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pageBuild?: shared.PageBuild;
}
