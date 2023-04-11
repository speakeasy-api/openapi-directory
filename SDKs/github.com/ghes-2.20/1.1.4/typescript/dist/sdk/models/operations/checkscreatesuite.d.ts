import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChecksCreateSuiteRequestBody extends SpeakeasyBase {
    /**
     * The sha of the head commit.
     */
    headSha: string;
}
export declare class ChecksCreateSuiteRequest extends SpeakeasyBase {
    requestBody?: ChecksCreateSuiteRequestBody;
    owner: string;
    repo: string;
}
export declare class ChecksCreateSuiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * when the suite already existed
     */
    checkSuite?: shared.CheckSuite;
}
