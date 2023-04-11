import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsGetLogSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class BuildsGetLogRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The build ID
     */
    buildId: number;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Success
 */
export declare class BuildsGetLog200ApplicationJSON extends SpeakeasyBase {
    value?: string[];
}
export declare class BuildsGetLogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildsGetLog200ApplicationJSONObject?: BuildsGetLog200ApplicationJSON;
}
