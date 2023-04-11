import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposRequestPagesBuildRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposRequestPagesBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pageBuildStatus?: shared.PageBuildStatus;
}
