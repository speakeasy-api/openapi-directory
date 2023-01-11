import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetNotificationByIdQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetNotificationByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetNotificationByIdRequest extends SpeakeasyBase {
    pathParams: GetNotificationByIdPathParams;
    queryParams: GetNotificationByIdQueryParams;
    headers: GetNotificationByIdHeaders;
}
export declare class GetNotificationByIdResponse extends SpeakeasyBase {
    contentType: string;
    notificationResponse?: shared.NotificationResponse;
    statusCode: number;
}
