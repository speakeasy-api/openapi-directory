import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsSearchRequest extends SpeakeasyBase {
    request?: shared.ProjectsSearch;
}
export declare class ProjectsSearchResponse extends SpeakeasyBase {
    contentType: string;
    projects?: shared.Project[];
    statusCode: number;
}
