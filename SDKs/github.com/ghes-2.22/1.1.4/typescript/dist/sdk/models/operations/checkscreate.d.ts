import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChecksCreateRequest extends SpeakeasyBase {
    requestBody: any;
    owner: string;
    repo: string;
}
export declare class ChecksCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    checkRun?: shared.CheckRun;
}
