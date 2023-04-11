import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostLegalEntitiesIdTermsOfServiceSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostLegalEntitiesIdTermsOfServiceRequest extends SpeakeasyBase {
    getTermsOfServiceDocumentRequest?: shared.GetTermsOfServiceDocumentRequest;
    /**
     * The unique identifier of the legal entity.
     */
    id: string;
}
export declare class PostLegalEntitiesIdTermsOfServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    getTermsOfServiceDocumentResponse?: shared.GetTermsOfServiceDocumentResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
