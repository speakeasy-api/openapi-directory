import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsListCollaboratorsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class ProjectsListCollaboratorsQueryParams extends SpeakeasyBase {
    affiliation?: shared.ProjectIdEnum;
    page?: number;
    perPage?: number;
}
export declare class ProjectsListCollaborators415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ProjectsListCollaboratorsRequest extends SpeakeasyBase {
    pathParams: ProjectsListCollaboratorsPathParams;
    queryParams: ProjectsListCollaboratorsQueryParams;
}
export declare class ProjectsListCollaboratorsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    projectsListCollaborators415ApplicationJSONObject?: ProjectsListCollaborators415ApplicationJson;
    simpleUsers?: shared.SimpleUser[];
    validationError?: shared.ValidationError;
}
