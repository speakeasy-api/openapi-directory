import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsGetDownloadUriSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The download type
 */
export declare enum BuildsGetDownloadUriDownloadTypeEnum {
    Build = "build",
    Symbols = "symbols",
    Logs = "logs",
    Mapping = "mapping",
    Bundle = "bundle"
}
export declare class BuildsGetDownloadUriRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The build ID
     */
    buildId: number;
    /**
     * The download type
     */
    downloadType: BuildsGetDownloadUriDownloadTypeEnum;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * A download reference
 */
export declare class BuildsGetDownloadUri200ApplicationJSON extends SpeakeasyBase {
    /**
     * Download URI
     */
    uri: string;
}
export declare class BuildsGetDownloadUriResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildsGetDownloadUri200ApplicationJSONObject?: BuildsGetDownloadUri200ApplicationJSON;
}
