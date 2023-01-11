import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUsersQueryParams extends SpeakeasyBase {
    email?: string;
    homeResource?: string;
    include?: string;
    limit?: number;
    nickname?: string;
    offset?: number;
    role?: string;
    search?: string;
    sort?: string;
    status?: number;
    username?: string;
}
export declare class ListUsersHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class ListUsersRequest extends SpeakeasyBase {
    queryParams: ListUsersQueryParams;
    headers: ListUsersHeaders;
}
export declare class ListUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userCollectionResponse?: shared.UserCollectionResponse;
}
