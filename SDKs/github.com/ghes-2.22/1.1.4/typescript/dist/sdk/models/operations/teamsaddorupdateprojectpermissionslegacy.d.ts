import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The permission to grant to the team for this project. Can be one of:
 *
 * @remarks
 * \* `read` - team members can read, but not write to or administer this project.
 * \* `write` - team members can read and write, but not administer this project.
 * \* `admin` - team members can read, write and administer this project.
 * Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
 */
export declare enum TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateProjectPermissionsLegacyRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant to the team for this project. Can be one of:
     *
     * @remarks
     * \* `read` - team members can read, but not write to or administer this project.
     * \* `write` - team members can read and write, but not administer this project.
     * \* `admin` - team members can read, write and administer this project.
     * Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    permission?: TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateProjectPermissionsLegacyRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateProjectPermissionsLegacyRequestBody;
    projectId: number;
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
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
