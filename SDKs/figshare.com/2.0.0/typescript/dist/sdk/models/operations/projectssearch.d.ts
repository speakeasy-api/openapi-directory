import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsSearchRequest extends SpeakeasyBase {
    /**
     * Search Parameters
     */
    projectsSearch?: shared.ProjectsSearch;
    /**
     * Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.
     */
    xCursor?: string;
}
export declare class ProjectsSearchResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK. An array of projects
     */
    projects?: shared.Project[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
