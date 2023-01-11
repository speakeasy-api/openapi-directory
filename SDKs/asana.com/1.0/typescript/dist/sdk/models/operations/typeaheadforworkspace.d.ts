import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TypeaheadForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class TypeaheadForWorkspaceQueryParams extends SpeakeasyBase {
    count?: number;
    optFields?: string[];
    optPretty?: boolean;
    query?: string;
    resourceType: shared.WorkspacePathGidEnum;
    type?: shared.WorkspacePathGidEnum;
}
/**
 * A generic list of objects, such as those returned by the typeahead search endpoint.
**/
export declare class TypeaheadForWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.AsanaNamedResource[];
}
export declare class TypeaheadForWorkspaceRequest extends SpeakeasyBase {
    pathParams: TypeaheadForWorkspacePathParams;
    queryParams: TypeaheadForWorkspaceQueryParams;
}
export declare class TypeaheadForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    typeaheadForWorkspace200ApplicationJSONObject?: TypeaheadForWorkspace200ApplicationJson;
}
