import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteNotificationByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteNotificationByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class DeleteNotificationByIdRequest extends SpeakeasyBase {
    pathParams: DeleteNotificationByIdPathParams;
    headers: DeleteNotificationByIdHeaders;
}
export declare class DeleteNotificationByIdResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
