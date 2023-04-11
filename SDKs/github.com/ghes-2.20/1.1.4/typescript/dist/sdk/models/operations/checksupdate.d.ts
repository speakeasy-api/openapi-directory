import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChecksUpdateRequest extends SpeakeasyBase {
    requestBody?: any;
    /**
     * check_run_id parameter
     */
    checkRunId: number;
    owner: string;
    repo: string;
}
export declare class ChecksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    checkRun?: shared.CheckRun;
}
