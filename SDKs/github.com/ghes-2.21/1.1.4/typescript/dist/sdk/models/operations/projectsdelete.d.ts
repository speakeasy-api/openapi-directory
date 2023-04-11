import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectsDeleteRequest extends SpeakeasyBase {
    projectId: number;
}
/**
 * Forbidden
 */
export declare class ProjectsDelete403ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    errors?: string[];
    message?: string;
}
export declare class ProjectsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Forbidden
     */
    projectsDelete403ApplicationJSONObject?: ProjectsDelete403ApplicationJSON;
}
