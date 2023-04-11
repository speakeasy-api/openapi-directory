import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppsUpdateUserPermissionsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum AppsUpdateUserPermissionsRequestBodyPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer"
}
/**
 * The value to update the user permission for the app.
 */
export declare class AppsUpdateUserPermissionsRequestBody extends SpeakeasyBase {
    /**
     * The permissions the user has for the app
     */
    permissions: AppsUpdateUserPermissionsRequestBodyPermissionsEnum[];
}
export declare class AppsUpdateUserPermissionsRequest extends SpeakeasyBase {
    /**
     * The value to update the user permission for the app.
     */
    requestBody: AppsUpdateUserPermissionsRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The user email of the user to patch
     */
    userEmail: string;
}
export declare enum AppsUpdateUserPermissionsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppsUpdateUserPermissionsDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppsUpdateUserPermissionsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * BadRequest
 */
export declare class AppsUpdateUserPermissionsDefaultApplicationJSON extends SpeakeasyBase {
    error: AppsUpdateUserPermissionsDefaultApplicationJSONError;
}
export declare class AppsUpdateUserPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * BadRequest
     */
    appsUpdateUserPermissionsDefaultApplicationJSONObject?: AppsUpdateUserPermissionsDefaultApplicationJSON;
}
