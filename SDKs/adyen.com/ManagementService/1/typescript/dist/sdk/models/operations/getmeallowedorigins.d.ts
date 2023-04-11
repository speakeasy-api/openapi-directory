import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMeAllowedOriginsResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    allowedOriginsResponse?: shared.AllowedOriginsResponse;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
