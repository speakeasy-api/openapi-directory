import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostDeleteShareholdersSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostDeleteShareholdersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    genericResponse?: shared.GenericResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
