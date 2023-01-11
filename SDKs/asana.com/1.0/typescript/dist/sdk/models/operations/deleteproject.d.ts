import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class DeleteProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeleteProject200ApplicationJson extends SpeakeasyBase {
    data?: Record<string, any>;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    pathParams: DeleteProjectPathParams;
    queryParams: DeleteProjectQueryParams;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deleteProject200ApplicationJSONObject?: DeleteProject200ApplicationJson;
}
