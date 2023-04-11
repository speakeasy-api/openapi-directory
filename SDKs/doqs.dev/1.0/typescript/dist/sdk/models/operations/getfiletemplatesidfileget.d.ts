import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFileTemplatesIdFileGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetFileTemplatesIdFileGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Client Error
     */
    responseError?: shared.ResponseError;
    /**
     * Successful Response
     */
    responseOkHttpUrl?: shared.ResponseOkHttpUrl;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
