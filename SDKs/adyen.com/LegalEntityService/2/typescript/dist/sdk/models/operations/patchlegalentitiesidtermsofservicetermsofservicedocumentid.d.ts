import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest extends SpeakeasyBase {
    acceptTermsOfServiceRequest?: shared.AcceptTermsOfServiceRequest;
    /**
     * The unique identifier of the legal entity.
     */
    id: string;
    /**
     * The unique identifier of the Terms of Service document.
     */
    termsofservicedocumentid: string;
}
export declare class PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    acceptTermsOfServiceResponse?: shared.AcceptTermsOfServiceResponse;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
