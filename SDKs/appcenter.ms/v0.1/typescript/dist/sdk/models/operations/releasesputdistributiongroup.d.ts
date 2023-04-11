import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReleasesPutDistributionGroupSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ReleasesPutDistributionGroupRequestBody extends SpeakeasyBase {
    /**
     * Whether a release is mandatory for the given destination
     */
    mandatoryUpdate: boolean;
}
export declare class ReleasesPutDistributionGroupRequest extends SpeakeasyBase {
    requestBody?: ReleasesPutDistributionGroupRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the releases destination
     */
    groupId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the release
     */
    releaseId: number;
}
export declare enum ReleasesPutDistributionGroup404ApplicationJSONCodeEnum {
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
export declare class ReleasesPutDistributionGroup404ApplicationJSON extends SpeakeasyBase {
    code: ReleasesPutDistributionGroup404ApplicationJSONCodeEnum;
    message: string;
}
export declare class ReleasesPutDistributionGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A destination can't be found.
     *
     * @remarks
     *
     */
    releasesPutDistributionGroup404ApplicationJSONObject?: ReleasesPutDistributionGroup404ApplicationJSON;
}
