import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChecksRerequestSuiteRequest extends SpeakeasyBase {
    /**
     * check_suite_id parameter
     */
    checkSuiteId: number;
    owner: string;
    repo: string;
}
export declare class ChecksRerequestSuiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    checksRerequestSuite201ApplicationJSONObject?: Record<string, any>;
}
