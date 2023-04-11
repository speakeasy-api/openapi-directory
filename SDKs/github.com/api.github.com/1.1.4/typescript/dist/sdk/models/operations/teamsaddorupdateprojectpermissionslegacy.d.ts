import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 */
export declare enum TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateProjectPermissionsLegacyRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    permission?: TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateProjectPermissionsLegacyRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateProjectPermissionsLegacyRequestBody;
    /**
     * The unique identifier of the project.
     */
    projectId: number;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
/**
 * Forbidden if the project is not owned by the organization
 */
export declare class TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class TeamsAddOrUpdateProjectPermissionsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Forbidden if the project is not owned by the organization
     */
    teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSONObject?: TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
