import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectsSearchRequest extends SpeakeasyBase {
    request?: shared.ProjectsSearch;
}
export declare class PrivateProjectsSearchResponse extends SpeakeasyBase {
    contentType: string;
    projectPrivates?: shared.ProjectPrivate[];
    statusCode: number;
}
