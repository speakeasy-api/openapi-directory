import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiKeysQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    perPage?: number;
    sortBy?: Record<string, any>;
    userId?: number;
}
export declare class GetApiKeysRequest extends SpeakeasyBase {
    queryParams: GetApiKeysQueryParams;
}
export declare class GetApiKeysResponse extends SpeakeasyBase {
    apiKeyEntities?: shared.ApiKeyEntity[];
    contentType: string;
    statusCode: number;
}
