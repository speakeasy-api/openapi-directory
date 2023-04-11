import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLegalEntitiesIdTermsOfServiceStatusSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetLegalEntitiesIdTermsOfServiceStatusRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the legal entity.
     */
    id: string;
}
export declare class GetLegalEntitiesIdTermsOfServiceStatusResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    calculateTermsOfServiceStatusResponse?: shared.CalculateTermsOfServiceStatusResponse;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
