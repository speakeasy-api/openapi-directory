import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUserByIdQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetUserByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetUserByIdRequest extends SpeakeasyBase {
    pathParams: GetUserByIdPathParams;
    queryParams: GetUserByIdQueryParams;
    headers: GetUserByIdHeaders;
}
export declare class GetUserByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userResponse?: shared.UserResponse;
}
