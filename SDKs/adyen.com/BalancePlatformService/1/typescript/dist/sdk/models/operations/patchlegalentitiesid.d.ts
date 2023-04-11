import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchLegalEntitiesIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchLegalEntitiesIdRequest extends SpeakeasyBase {
    legalEntityInfoInput?: shared.LegalEntityInfoInput;
    /**
     * The unique identifier of the legal entity.
     */
    id: string;
}
export declare class PatchLegalEntitiesIdResponse extends SpeakeasyBase {
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
