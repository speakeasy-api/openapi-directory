import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChecksGetSuiteRequest extends SpeakeasyBase {
    /**
     * check_suite_id parameter
     */
    checkSuiteId: number;
    owner: string;
    repo: string;
}
export declare class ChecksGetSuiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    checkSuite?: shared.CheckSuite;
}
