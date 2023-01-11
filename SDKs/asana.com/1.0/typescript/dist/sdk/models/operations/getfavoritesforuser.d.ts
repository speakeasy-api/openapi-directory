import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFavoritesForUserPathParams extends SpeakeasyBase {
    userGid: string;
}
export declare class GetFavoritesForUserQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
    resourceType: shared.FieldsEnum;
    workspace: string;
}
export declare class GetFavoritesForUser200ApplicationJson extends SpeakeasyBase {
    data?: shared.AsanaNamedResource[];
}
export declare class GetFavoritesForUserRequest extends SpeakeasyBase {
    pathParams: GetFavoritesForUserPathParams;
    queryParams: GetFavoritesForUserQueryParams;
}
export declare class GetFavoritesForUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getFavoritesForUser200ApplicationJSONObject?: GetFavoritesForUser200ApplicationJson;
}
