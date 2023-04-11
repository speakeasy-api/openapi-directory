import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The permission to grant to the team for this project. Can be one of:
 *
 * @remarks
 * \* `read` - team members can read, but not write to or administer this project.
 * \* `write` - team members can read and write, but not administer this project.
 * \* `admin` - team members can read, write and administer this project.
 * Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."
 */
export declare enum TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateProjectPermissionsRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant to the team for this project. Can be one of:
     *
     * @remarks
     * \* `read` - team members can read, but not write to or administer this project.
     * \* `write` - team members can read and write, but not administer this project.
     * \* `admin` - team members can read, write and administer this project.
     * Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    permission?: TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateProjectPermissionsRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateProjectPermissionsRequestBody;
    /**
     * This API is under preview and subject to change.
     */
    accept: string;
    projectId: number;
    teamId: number;
}
/**
 * Forbidden if the project is not owned by the organization
 */
export declare class TeamsAddOrUpdateProjectPermissions403ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class TeamsAddOrUpdateProjectPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden if the project is not owned by the organization
     */
    teamsAddOrUpdateProjectPermissions403ApplicationJSONObject?: TeamsAddOrUpdateProjectPermissions403ApplicationJSON;
}
