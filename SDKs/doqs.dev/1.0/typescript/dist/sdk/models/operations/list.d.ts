import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRequest extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class ListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Client Error
     */
    responseError?: shared.ResponseError;
    /**
     * Successful Response
     */
    responseOkListAppsApiRoutesTemplatesTemplate?: shared.ResponseOkListAppsApiRoutesTemplatesTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
