import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectArticlesPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class ProjectArticlesRequest extends SpeakeasyBase {
    pathParams: ProjectArticlesPathParams;
}
export declare class ProjectArticlesResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
}
