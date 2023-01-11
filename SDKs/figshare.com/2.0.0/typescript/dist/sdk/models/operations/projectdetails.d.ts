import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectDetailsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class ProjectDetailsRequest extends SpeakeasyBase {
    pathParams: ProjectDetailsPathParams;
}
export declare class ProjectDetailsResponse extends SpeakeasyBase {
    contentType: string;
    projectComplete?: shared.ProjectComplete;
    statusCode: number;
}
