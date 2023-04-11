import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBusinessLinesIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetBusinessLinesIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the business line.
     */
    id: string;
}
export declare class GetBusinessLinesIdResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    businessLine?: shared.BusinessLine;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
