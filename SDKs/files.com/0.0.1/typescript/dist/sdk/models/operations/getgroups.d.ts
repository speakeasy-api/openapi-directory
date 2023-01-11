import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    ids?: string;
    perPage?: number;
    sortBy?: Record<string, any>;
}
export declare class GetGroupsRequest extends SpeakeasyBase {
    queryParams: GetGroupsQueryParams;
}
export declare class GetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groupEntities?: shared.GroupEntity[];
    statusCode: number;
}
