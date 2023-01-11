import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBalancePlatformsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBalancePlatformsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetBalancePlatformsIdRequest extends SpeakeasyBase {
    pathParams: GetBalancePlatformsIdPathParams;
    security: GetBalancePlatformsIdSecurity;
}
export declare class GetBalancePlatformsIdResponse extends SpeakeasyBase {
    balancePlatform?: any;
    contentType: string;
    restServiceError?: any;
    statusCode: number;
}
