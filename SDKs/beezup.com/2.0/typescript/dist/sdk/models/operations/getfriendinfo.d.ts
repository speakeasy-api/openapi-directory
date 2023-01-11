import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFriendInfoPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetFriendInfoHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetFriendInfoRequest extends SpeakeasyBase {
    pathParams: GetFriendInfoPathParams;
    headers: GetFriendInfoHeaders;
}
export declare class GetFriendInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    userFriendInfo?: shared.UserFriendInfo;
}
