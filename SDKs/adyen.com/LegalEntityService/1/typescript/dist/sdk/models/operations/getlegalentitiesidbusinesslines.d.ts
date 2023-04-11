import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLegalEntitiesIdBusinessLinesSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetLegalEntitiesIdBusinessLinesRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the legal entity.
     */
    id: string;
}
export declare class GetLegalEntitiesIdBusinessLinesResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    businessLines?: shared.BusinessLines;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
