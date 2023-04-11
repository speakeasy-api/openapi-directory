import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChecksGetRequest extends SpeakeasyBase {
    /**
     * check_run_id parameter
     */
    checkRunId: number;
    owner: string;
    repo: string;
}
export declare class ChecksGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    checkRun?: shared.CheckRun;
}
