import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppleMappingTestFlightGroupsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppleMappingTestFlightGroupsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppleMappingTestFlightGroupsDefaultApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Error
 */
export declare class AppleMappingTestFlightGroupsDefaultApplicationJSON extends SpeakeasyBase {
    code: AppleMappingTestFlightGroupsDefaultApplicationJSONCodeEnum;
    message: string;
}
/**
 * Apple Test Flight Groups Response Type
 */
export declare class AppleMappingTestFlightGroups200ApplicationJSON extends SpeakeasyBase {
    /**
     * apple id of the group.
     */
    appleId?: number;
    /**
     * id of the group.
     */
    id?: string;
    /**
     * name of the group.
     */
    name?: string;
    /**
     * provider id of the group.
     */
    providerId?: number;
}
export declare class AppleMappingTestFlightGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appleMappingTestFlightGroups200ApplicationJSONObjects?: AppleMappingTestFlightGroups200ApplicationJSON[];
    /**
     * Error
     */
    appleMappingTestFlightGroupsDefaultApplicationJSONObject?: AppleMappingTestFlightGroupsDefaultApplicationJSON;
}
