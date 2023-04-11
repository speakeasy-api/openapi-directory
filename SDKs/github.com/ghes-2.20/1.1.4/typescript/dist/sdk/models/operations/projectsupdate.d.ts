import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The baseline permission that all organization members have on this project
 */
export declare enum ProjectsUpdateRequestBodyOrganizationPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    None = "none"
}
export declare class ProjectsUpdateRequestBody extends SpeakeasyBase {
    /**
     * Body of the project
     */
    body?: string;
    /**
     * Name of the project
     */
    name?: string;
    /**
     * The baseline permission that all organization members have on this project
     */
    organizationPermission?: ProjectsUpdateRequestBodyOrganizationPermissionEnum;
    /**
     * Whether or not this project can be seen by everyone.
     */
    private?: boolean;
    /**
     * State of the project; either 'open' or 'closed'
     */
    state?: string;
}
export declare class ProjectsUpdateRequest extends SpeakeasyBase {
    requestBody?: ProjectsUpdateRequestBody;
    projectId: number;
}
/**
 * Forbidden
 */
export declare class ProjectsUpdate403ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    errors?: string[];
    message?: string;
}
export declare class ProjectsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    project?: shared.Project;
    /**
     * Forbidden
     */
    projectsUpdate403ApplicationJSONObject?: ProjectsUpdate403ApplicationJSON;
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
