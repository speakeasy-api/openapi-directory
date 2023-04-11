import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsGetStatusByAppIdSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class BuildsGetStatusByAppIdRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Success. Availability for build service status is stored in response schema.
 */
export declare class BuildsGetStatusByAppId200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    os?: string;
    service?: string;
    status?: string;
    url?: string;
    validUntil?: number;
}
export declare class BuildsGetStatusByAppIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success. Availability for build service status is stored in response schema.
     */
    buildsGetStatusByAppId200ApplicationJSONObject?: BuildsGetStatusByAppId200ApplicationJSON;
}
