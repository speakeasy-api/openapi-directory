import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserPlatformEnum {
    Web = "web",
    IPad = "iPad",
    IPhone = "iPhone",
    Android = "Android",
    CAstore = "CAstore",
    RequestAccess = "requestAccess",
    SharedAccess = "sharedAccess",
    SingleAccess = "singleAccess",
    Transfer = "transfer",
    RefreshToken = "refresh_token"
}
/**
 * Successful DELETE on User resource
 */
export declare class User extends SpeakeasyBase {
    id: number;
    platform: UserPlatformEnum;
    signin: Date;
}
