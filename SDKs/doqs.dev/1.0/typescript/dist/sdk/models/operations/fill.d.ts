import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FillRequest extends SpeakeasyBase {
    fillTemplateRequest: shared.FillTemplateRequest;
    id: string;
}
export declare class FillResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Client Error
     */
    responseError?: shared.ResponseError;
    /**
     * Successful Response
     */
    fill200ApplicationJSONAny?: any;
}
