import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkQueryParams extends SpeakeasyBase {
    alt: number;
    lat: number;
    lon: number;
    nam: string;
    net: string;
    rxg?: number;
}
export declare class NetworkSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class NetworkRequest extends SpeakeasyBase {
    queryParams: NetworkQueryParams;
    security: NetworkSecurity;
}
export declare class NetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
