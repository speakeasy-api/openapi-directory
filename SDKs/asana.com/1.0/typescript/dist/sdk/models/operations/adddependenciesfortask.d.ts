import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddDependenciesForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class AddDependenciesForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddDependenciesForTaskRequestBody extends SpeakeasyBase {
    data?: shared.ModifyDependenciesRequest;
}
export declare class AddDependenciesForTask200ApplicationJson extends SpeakeasyBase {
    data?: Record<string, any>;
}
export declare class AddDependenciesForTaskRequest extends SpeakeasyBase {
    pathParams: AddDependenciesForTaskPathParams;
    queryParams: AddDependenciesForTaskQueryParams;
    request: AddDependenciesForTaskRequestBody;
}
export declare class AddDependenciesForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addDependenciesForTask200ApplicationJSONObject?: AddDependenciesForTask200ApplicationJson;
}
