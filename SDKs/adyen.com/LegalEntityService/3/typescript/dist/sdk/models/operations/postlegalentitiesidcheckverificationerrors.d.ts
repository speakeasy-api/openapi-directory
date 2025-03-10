import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostLegalEntitiesIdCheckVerificationErrorsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostLegalEntitiesIdCheckVerificationErrorsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the legal entity.
     */
    id: string;
}
export declare class PostLegalEntitiesIdCheckVerificationErrorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    /**
     * OK - the request has succeeded.
     */
    verificationErrors?: shared.VerificationErrors;
}
