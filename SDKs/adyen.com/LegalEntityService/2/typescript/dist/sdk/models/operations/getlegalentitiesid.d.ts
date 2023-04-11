import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLegalEntitiesIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetLegalEntitiesIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the legal entity.
     */
    id: string;
}
export declare class GetLegalEntitiesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    legalEntity?: shared.LegalEntity;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
