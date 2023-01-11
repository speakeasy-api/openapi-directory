import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    groupId?: number;
    includeAncestors?: boolean;
    path?: string;
    perPage?: number;
    sortBy?: Record<string, any>;
    userId?: number;
}
export declare class GetNotificationsRequest extends SpeakeasyBase {
    queryParams: GetNotificationsQueryParams;
}
export declare class GetNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    notificationEntities?: shared.NotificationEntity[];
    statusCode: number;
}
