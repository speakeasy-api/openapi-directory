import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchLegalEntitiesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchLegalEntitiesIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PatchLegalEntitiesIdRequest extends SpeakeasyBase {
    pathParams: PatchLegalEntitiesIdPathParams;
    request?: any;
    security: PatchLegalEntitiesIdSecurity;
}
export declare class PatchLegalEntitiesIdResponse extends SpeakeasyBase {
    contentType: string;
    legalEntity?: any;
    serviceError?: any;
    statusCode: number;
}
