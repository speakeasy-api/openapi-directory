import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupInvitationsAcceptAllSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum DistributionGroupInvitationsAcceptAllDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupInvitationsAcceptAllDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupInvitationsAcceptAllDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupInvitationsAcceptAllDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupInvitationsAcceptAllDefaultApplicationJSONError;
}
export declare class DistributionGroupInvitationsAcceptAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    distributionGroupInvitationsAcceptAllDefaultApplicationJSONObject?: DistributionGroupInvitationsAcceptAllDefaultApplicationJSON;
}
