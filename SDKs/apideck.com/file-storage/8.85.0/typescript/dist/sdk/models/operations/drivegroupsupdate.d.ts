import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveGroupsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DriveGroupsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DriveGroupsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DriveGroupsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DriveGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: DriveGroupsUpdatePathParams;
    queryParams: DriveGroupsUpdateQueryParams;
    headers: DriveGroupsUpdateHeaders;
    request: shared.DriveGroupInput;
    security: DriveGroupsUpdateSecurity;
}
export declare class DriveGroupsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateDriveGroupResponse?: shared.UpdateDriveGroupResponse;
}
