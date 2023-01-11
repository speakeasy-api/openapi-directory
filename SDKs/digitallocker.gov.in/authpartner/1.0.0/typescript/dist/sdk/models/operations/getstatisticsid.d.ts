import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatisticsIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class GetStatisticsId400ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetStatisticsId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetStatisticsId500ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetStatisticsIdRequest extends SpeakeasyBase {
    request?: any;
    security: GetStatisticsIdSecurity;
}
export declare class GetStatisticsIdResponse extends SpeakeasyBase {
    contentType: string;
    getStatisticsId400ApplicationJSONObject?: GetStatisticsId400ApplicationJson;
    getStatisticsId401ApplicationJSONObject?: GetStatisticsId401ApplicationJson;
    getStatisticsId500ApplicationJSONObject?: GetStatisticsId500ApplicationJson;
    getStatisticsResponse?: shared.GetStatisticsResponse;
    statusCode: number;
}
