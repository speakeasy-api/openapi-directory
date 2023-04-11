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
    requestBody: ChecksCreateSuiteRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ChecksCreateSuiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response when the suite already exists
     */
    checkSuite?: shared.CheckSuite;
}
