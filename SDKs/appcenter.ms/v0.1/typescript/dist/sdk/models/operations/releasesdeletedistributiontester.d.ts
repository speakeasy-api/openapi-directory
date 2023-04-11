import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesDeleteDistributionTesterSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesDeleteDistributionTesterRequest extends SpeakeasyBase {
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
     * The id of the tester
     */
    testerId: string;
}
export declare enum ReleasesDeleteDistributionTester404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Tester can't be found
 *
 * @remarks
 *
 */
export declare class ReleasesDeleteDistributionTester404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesDeleteDistributionTester404ApplicationJSONCodeEnum;
    message: string;
}
export declare class ReleasesDeleteDistributionTesterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Tester can't be found
     *
     * @remarks
     *
     */
    releasesDeleteDistributionTester404ApplicationJSONObject?: ReleasesDeleteDistributionTester404ApplicationJSON;
}
