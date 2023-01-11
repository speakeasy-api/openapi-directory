import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmailListByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetEmailListByIdQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetEmailListByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetEmailListByIdRequest extends SpeakeasyBase {
    pathParams: GetEmailListByIdPathParams;
    queryParams: GetEmailListByIdQueryParams;
    headers: GetEmailListByIdHeaders;
}
export declare class GetEmailListByIdResponse extends SpeakeasyBase {
    contentType: string;
    emailListResponse?: shared.EmailListResponse;
    statusCode: number;
}
