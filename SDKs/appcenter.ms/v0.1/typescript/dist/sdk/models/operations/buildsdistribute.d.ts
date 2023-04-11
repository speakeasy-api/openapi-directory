import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsDistributeSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum BuildsDistributeRequestBodyDestinationsTypeEnum {
    Store = "store",
    Group = "group",
    Tester = "tester"
}
/**
 * Destination details for distributing build releases
 */
export declare class BuildsDistributeRequestBodyDestinations extends SpeakeasyBase {
    id: string;
    type: BuildsDistributeRequestBodyDestinationsTypeEnum;
}
/**
 * The distribution details
 */
export declare class BuildsDistributeRequestBody extends SpeakeasyBase {
    /**
     * Array of objects {id:string, type:string} with "id" being the distribution group ID, store ID, or tester email, and "type" being "group", "store", or "tester"
     */
    destinations?: BuildsDistributeRequestBodyDestinations[];
    mandatoryUpdate?: boolean;
    notifyTesters?: boolean;
    /**
     * The release notes
     */
    releaseNotes?: string;
}
export declare class BuildsDistributeRequest extends SpeakeasyBase {
    /**
     * The distribution details
     */
    requestBody: BuildsDistributeRequestBody;
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
export declare class BuildsDistribute200ApplicationJSON extends SpeakeasyBase {
    /**
     * Status of the Request
     */
    status?: string;
    /**
     * A unique ID of the upload
     */
    uploadId?: string;
}
export declare class BuildsDistributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildsDistribute200ApplicationJSONObject?: BuildsDistribute200ApplicationJSON;
}
