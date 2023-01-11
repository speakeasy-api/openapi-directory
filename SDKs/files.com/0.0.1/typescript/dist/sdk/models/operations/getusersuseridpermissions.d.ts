import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdPermissionsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUsersUserIdPermissionsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    groupId?: string;
    includeGroups?: boolean;
    path?: string;
    perPage?: number;
    sortBy?: Record<string, any>;
}
export declare class GetUsersUserIdPermissionsRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdPermissionsPathParams;
    queryParams: GetUsersUserIdPermissionsQueryParams;
}
export declare class GetUsersUserIdPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permissionEntities?: shared.PermissionEntity[];
    statusCode: number;
}
