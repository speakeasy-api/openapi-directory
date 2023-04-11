import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserRequest extends SpeakeasyBase {
    userId: number;
}
/**
 * Operating system of device.
 */
export declare enum GetUserUserMobileApplicationOSEnum {
    Android = "Android",
    Ios = "IOS",
    Other = "OTHER"
}
/**
 * type of device.
 */
export declare enum GetUserUserMobileApplicationDeviceNameEnum {
    IPhone = "iPhone",
    Android = "Android",
    Other = "Other"
}
/**
 * Status of user
 */
export declare enum GetUserUserMobileApplicationStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Locked = "LOCKED",
    SmsSent = "SMS_SENT"
}
export declare class GetUserUserMobileApplication extends SpeakeasyBase {
    /**
     * Operating system of device.
     */
    os?: GetUserUserMobileApplicationOSEnum;
    /**
     * Business user ID
     */
    businessUserId?: number;
    /**
     * Client ID of user.
     */
    clientID?: string;
    /**
     * type of device.
     */
    deviceName?: GetUserUserMobileApplicationDeviceNameEnum;
    /**
     * OS version for device.
     */
    deviceOSVersion?: string;
    /**
     * Mobile application id for user.
     */
    mobileApplicationId?: number;
    /**
     * Status of user
     */
    status?: GetUserUserMobileApplicationStatusEnum;
}
/**
 * User role
 */
export declare enum GetUserUserRoleEnum {
    Admin = "ADMIN",
    FullUser = "FULL_USER",
    ReadOnly = "READ_ONLY",
    CardOnly = "CARD_ONLY"
}
/**
 * Status of user
 */
export declare enum GetUserUserStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Frozen = "FROZEN",
    InviteSent = "INVITE_SENT",
    SmsCodeSent = "SMS_CODE_SENT"
}
/**
 * Unique information about a User.
 */
export declare class GetUserUser extends SpeakeasyBase {
    /**
     * email address for user
     */
    emailAddress?: string;
    /**
     * User first name
     */
    firstName?: string;
    /**
     * The User ID for this User
     */
    id?: number;
    /**
     * User second name
     */
    lastName?: string;
    /**
     * Timestamp on when user last logged in.
     */
    lastlogin?: string;
    mobileApplicationDetails?: GetUserUserMobileApplication;
    /**
     * User mobile number
     */
    mobileNumber?: string;
    /**
     * User role
     */
    role?: GetUserUserRoleEnum;
    /**
     * Status of user
     */
    status?: GetUserUserStatusEnum;
    /**
     * Users Cvl type ID (shows up when status is LIVE)
     */
    userCvl?: string;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unique information about a User.
     */
    user?: GetUserUser;
}
