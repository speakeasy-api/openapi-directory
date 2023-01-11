import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveGroupsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DriveGroupsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DriveGroupsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DriveGroupsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DriveGroupsDeleteRequest extends SpeakeasyBase {
    pathParams: DriveGroupsDeletePathParams;
    queryParams: DriveGroupsDeleteQueryParams;
    headers: DriveGroupsDeleteHeaders;
    security: DriveGroupsDeleteSecurity;
}
export declare class DriveGroupsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteDriveGroupResponse?: shared.DeleteDriveGroupResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
