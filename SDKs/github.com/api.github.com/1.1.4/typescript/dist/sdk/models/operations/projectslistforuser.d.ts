import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsListForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class ProjectsListForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    state?: shared.UsernameEnum1;
}
export declare class ProjectsListForUser415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsListForUserRequest extends SpeakeasyBase {
    pathParams: ProjectsListForUserPathParams;
    queryParams: ProjectsListForUserQueryParams;
}
export declare class ProjectsListForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    projects?: shared.Project[];
    projectsListForUser415ApplicationJSONObject?: ProjectsListForUser415ApplicationJson;
    validationError?: shared.ValidationError;
}
