import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostLegalEntitiesSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostLegalEntitiesRequest extends SpeakeasyBase {
    request?: any;
    security: PostLegalEntitiesSecurity;
}
export declare class PostLegalEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    legalEntity?: any;
    serviceError?: any;
    statusCode: number;
}
