import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListSharesScopeEnum {
    All = "all",
    Active = "active",
    CurrentUser = "currentUser"
}
export declare enum ListSharesSortEnum {
    Created = "created",
    MinusCreated = "-created"
}
export declare enum ListSharesTypeEnum {
    Receive = "receive",
    SharedFolder = "shared_folder",
    Send = "send"
}
export declare class ListSharesQueryParams extends SpeakeasyBase {
    include?: string;
    limit?: number;
    message?: string;
    name?: string;
    offset?: number;
    recipient?: string;
    scope?: ListSharesScopeEnum;
    search?: string;
    sort?: ListSharesSortEnum;
    type?: ListSharesTypeEnum;
    username?: string;
}
export declare class ListSharesHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class ListSharesRequest extends SpeakeasyBase {
    queryParams: ListSharesQueryParams;
    headers: ListSharesHeaders;
}
export declare class ListSharesResponse extends SpeakeasyBase {
    contentType: string;
    shareCollectionResponse?: shared.ShareCollectionResponse;
    statusCode: number;
}
