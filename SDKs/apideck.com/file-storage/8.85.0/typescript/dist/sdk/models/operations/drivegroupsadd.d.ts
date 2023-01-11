import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveGroupsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DriveGroupsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DriveGroupsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DriveGroupsAddRequest extends SpeakeasyBase {
    queryParams: DriveGroupsAddQueryParams;
    headers: DriveGroupsAddHeaders;
    request: shared.DriveGroupInput;
    security: DriveGroupsAddSecurity;
}
export declare class DriveGroupsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createDriveGroupResponse?: shared.CreateDriveGroupResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
