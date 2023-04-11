import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum AdminListUsersAscEnum {
    True = "true"
}
export declare enum AdminListUsersFlagEnum {
    Active = "active",
    New = "new",
    Staff = "staff",
    Suspended = "suspended",
    Blocked = "blocked",
    Suspect = "suspect"
}
export declare enum AdminListUsersOrderEnum {
    Created = "created",
    LastEmailed = "last_emailed",
    Seen = "seen",
    Username = "username",
    Email = "email",
    TrustLevel = "trust_level",
    DaysVisited = "days_visited",
    PostsRead = "posts_read",
    TopicsViewed = "topics_viewed",
    Posts = "posts",
    ReadTime = "read_time"
}
export declare class AdminListUsersRequest extends SpeakeasyBase {
    asc?: AdminListUsersAscEnum;
    flag: AdminListUsersFlagEnum;
    order?: AdminListUsersOrderEnum;
    page?: number;
    showEmails?: boolean;
}
export declare class AdminListUsers200ApplicationJSON extends SpeakeasyBase {
    active: boolean;
    admin: boolean;
    avatarTemplate: string;
    createdAt: string;
    createdAtAge: number;
    daysVisited: number;
    email?: string;
    flagLevel: number;
    id: number;
    lastEmailedAge: number;
    lastEmailedAt: string;
    lastSeenAge: number;
    lastSeenAt: string;
    manualLockedTrustLevel: string;
    moderator: boolean;
    name: string;
    postCount: number;
    postsReadCount: number;
    secondaryEmails?: any[];
    staged: boolean;
    timeRead: number;
    title: string;
    topicsEntered: number;
    trustLevel: number;
    username: string;
}
export declare class AdminListUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    adminListUsers200ApplicationJSONObjects?: AdminListUsers200ApplicationJSON[];
}
