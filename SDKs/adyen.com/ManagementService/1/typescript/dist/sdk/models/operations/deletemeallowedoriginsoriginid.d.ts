import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteMeAllowedOriginsOriginIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class DeleteMeAllowedOriginsOriginIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the allowed origin.
     */
    originId: string;
}
export declare class DeleteMeAllowedOriginsOriginIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
