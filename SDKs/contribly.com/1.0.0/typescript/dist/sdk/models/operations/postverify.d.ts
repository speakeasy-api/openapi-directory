import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostVerifyResponse extends SpeakeasyBase {
    /**
     * Token is valid
     */
    authority?: shared.Authority;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
