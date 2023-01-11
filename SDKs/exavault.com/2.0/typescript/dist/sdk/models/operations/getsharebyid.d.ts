import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShareByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetShareByIdQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetShareByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetShareByIdRequest extends SpeakeasyBase {
    pathParams: GetShareByIdPathParams;
    queryParams: GetShareByIdQueryParams;
    headers: GetShareByIdHeaders;
}
export declare class GetShareByIdResponse extends SpeakeasyBase {
    contentType: string;
    shareResponse?: shared.ShareResponse;
    statusCode: number;
}
