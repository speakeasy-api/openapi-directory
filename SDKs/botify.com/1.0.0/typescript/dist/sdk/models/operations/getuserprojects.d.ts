import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserProjectsPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetUserProjectsQueryParams extends SpeakeasyBase {
    page?: number;
    size?: number;
}
export declare class GetUserProjects200ApplicationJson extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.Project[];
    size?: number;
}
export declare class GetUserProjectsRequest extends SpeakeasyBase {
    pathParams: GetUserProjectsPathParams;
    queryParams: GetUserProjectsQueryParams;
}
export declare class GetUserProjectsResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getUserProjects200ApplicationJSONObject?: GetUserProjects200ApplicationJson;
}
