import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProjectStatusPathParams extends SpeakeasyBase {
    projectStatusGid: string;
}
export declare class DeleteProjectStatusQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeleteProjectStatus200ApplicationJson extends SpeakeasyBase {
    data?: Record<string, any>;
}
export declare class DeleteProjectStatusRequest extends SpeakeasyBase {
    pathParams: DeleteProjectStatusPathParams;
    queryParams: DeleteProjectStatusQueryParams;
}
export declare class DeleteProjectStatusResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deleteProjectStatus200ApplicationJSONObject?: DeleteProjectStatus200ApplicationJson;
}
