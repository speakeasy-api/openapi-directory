import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupsGroupIdPermissionsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetGroupsGroupIdPermissionsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    includeGroups?: boolean;
    path?: string;
    perPage?: number;
    sortBy?: Record<string, any>;
    userId?: string;
}
export declare class GetGroupsGroupIdPermissionsRequest extends SpeakeasyBase {
    pathParams: GetGroupsGroupIdPermissionsPathParams;
    queryParams: GetGroupsGroupIdPermissionsQueryParams;
}
export declare class GetGroupsGroupIdPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permissionEntities?: shared.PermissionEntity[];
    statusCode: number;
}
