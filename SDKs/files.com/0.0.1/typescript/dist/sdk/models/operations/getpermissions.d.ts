import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPermissionsQueryParams extends SpeakeasyBase {
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
    userId?: string;
}
export declare class GetPermissionsRequest extends SpeakeasyBase {
    queryParams: GetPermissionsQueryParams;
}
export declare class GetPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permissionEntities?: shared.PermissionEntity[];
    statusCode: number;
}
