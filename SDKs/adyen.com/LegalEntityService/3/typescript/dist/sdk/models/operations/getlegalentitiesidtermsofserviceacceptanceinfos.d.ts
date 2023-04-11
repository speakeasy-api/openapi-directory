import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLegalEntitiesIdTermsOfServiceAcceptanceInfosSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the legal entity.
     */
    id: string;
}
export declare class GetLegalEntitiesIdTermsOfServiceAcceptanceInfosResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    getTermsOfServiceAcceptanceInfosResponse?: shared.GetTermsOfServiceAcceptanceInfosResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
