import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdApiKeysPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdApiKeysQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    perPage?: number;
    sortBy?: Record<string, any>;
}
export declare class GetUsersUserIdApiKeysRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdApiKeysPathParams;
    queryParams: GetUsersUserIdApiKeysQueryParams;
}
export declare class GetUsersUserIdApiKeysResponse extends SpeakeasyBase {
    apiKeyEntities?: shared.ApiKeyEntity[];
    contentType: string;
    statusCode: number;
}
