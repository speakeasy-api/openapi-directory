import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesDeleteDistributionStoreSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesDeleteDistributionStoreRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the release
     */
    releaseId: number;
    /**
     * The id of the distribution store
     */
    storeId: string;
}
export declare enum ReleasesDeleteDistributionStore404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Distribution store destination can't be found.
 *
 * @remarks
 *
 */
export declare class ReleasesDeleteDistributionStore404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesDeleteDistributionStore404ApplicationJSONCodeEnum;
    message: string;
}
export declare class ReleasesDeleteDistributionStoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Distribution store destination can't be found.
     *
     * @remarks
     *
     */
    releasesDeleteDistributionStore404ApplicationJSONObject?: ReleasesDeleteDistributionStore404ApplicationJSON;
}
