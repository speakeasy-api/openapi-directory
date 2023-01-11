import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLegalEntitiesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetLegalEntitiesIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetLegalEntitiesIdRequest extends SpeakeasyBase {
    pathParams: GetLegalEntitiesIdPathParams;
    security: GetLegalEntitiesIdSecurity;
}
export declare class GetLegalEntitiesIdResponse extends SpeakeasyBase {
    contentType: string;
    legalEntity?: any;
    serviceError?: any;
    statusCode: number;
}
