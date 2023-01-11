import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserListOfValuesPathParams extends SpeakeasyBase {
    listName: string;
}
export declare class GetUserListOfValuesHeaders extends SpeakeasyBase {
    acceptLanguage?: string[];
    ifNoneMatch?: string;
}
export declare class GetUserListOfValuesRequest extends SpeakeasyBase {
    pathParams: GetUserListOfValuesPathParams;
    headers: GetUserListOfValuesHeaders;
}
export declare class GetUserListOfValuesResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    userListOfValuesResponse?: shared.UserListOfValuesResponse;
}
