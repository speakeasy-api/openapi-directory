import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBalancePlatformsIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetBalancePlatformsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the balance platform.
     */
    id: string;
}
export declare class GetBalancePlatformsIdResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    balancePlatform?: shared.BalancePlatform;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
