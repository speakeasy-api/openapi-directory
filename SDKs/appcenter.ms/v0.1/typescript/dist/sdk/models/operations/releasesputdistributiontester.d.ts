import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesPutDistributionTesterSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesPutDistributionTesterRequestBody extends SpeakeasyBase {
    /**
     * Whether a release is mandatory for the given destination
     */
    mandatoryUpdate: boolean;
}
export declare class ReleasesPutDistributionTesterRequest extends SpeakeasyBase {
    requestBody?: ReleasesPutDistributionTesterRequestBody;
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
export declare enum ReleasesPutDistributionTester404ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * A destination can't be found.
 *
 * @remarks
 *
 */
export declare class ReleasesPutDistributionTester404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesPutDistributionTester404ApplicationJSONCodeEnum;
    message: string;
}
export declare class ReleasesPutDistributionTesterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A destination can't be found.
     *
     * @remarks
     *
     */
    releasesPutDistributionTester404ApplicationJSONObject?: ReleasesPutDistributionTester404ApplicationJSON;
}
