import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostDisableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    disableResult?: shared.DisableResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
