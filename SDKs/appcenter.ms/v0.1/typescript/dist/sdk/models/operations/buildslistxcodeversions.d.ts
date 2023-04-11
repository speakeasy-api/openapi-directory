import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsListXcodeVersionsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class BuildsListXcodeVersionsRequest extends SpeakeasyBase {
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
 * Bad Request
 */
export declare class BuildsListXcodeVersionsDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
/**
 * The Xcode version
 */
export declare class BuildsListXcodeVersions200ApplicationJSON extends SpeakeasyBase {
    /**
     * If the Xcode is latest stable
     */
    current?: boolean;
    /**
     * The version name
     */
    name?: string;
}
export declare class BuildsListXcodeVersionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildsListXcodeVersions200ApplicationJSONObjects?: BuildsListXcodeVersions200ApplicationJSON[];
    /**
     * Bad Request
     */
    buildsListXcodeVersionsDefaultApplicationJSONObject?: BuildsListXcodeVersionsDefaultApplicationJSON;
}
