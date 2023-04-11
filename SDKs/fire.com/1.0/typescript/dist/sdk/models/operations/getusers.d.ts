import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Operating system of device.
 */
export declare enum GetUsersUserMobileApplicationOSEnum {
    Android = "Android",
    Ios = "IOS",
    Other = "OTHER"
}
/**
 * type of device.
 */
export declare enum GetUsersUserMobileApplicationDeviceNameEnum {
    IPhone = "iPhone",
    Android = "Android",
    Other = "Other"
}
/**
 * Status of user
 */
export declare enum GetUsersUserMobileApplicationStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Locked = "LOCKED",
    SmsSent = "SMS_SENT"
}
export declare class GetUsersUserMobileApplication extends SpeakeasyBase {
    /**
     * Operating system of device.
     */
    os?: GetUsersUserMobileApplicationOSEnum;
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
    deviceName?: GetUsersUserMobileApplicationDeviceNameEnum;
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
    status?: GetUsersUserMobileApplicationStatusEnum;
}
/**
 * User role
 */
export declare enum GetUsersUserRoleEnum {
    Admin = "ADMIN",
    FullUser = "FULL_USER",
    ReadOnly = "READ_ONLY",
    CardOnly = "CARD_ONLY"
}
/**
 * Status of user
 */
export declare enum GetUsersUserStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Frozen = "FROZEN",
    InviteSent = "INVITE_SENT",
    SmsCodeSent = "SMS_CODE_SENT"
}
export declare class GetUsersUser extends SpeakeasyBase {
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
    mobileApplicationDetails?: GetUsersUserMobileApplication;
    /**
     * User mobile number
     */
    mobileNumber?: string;
    /**
     * User role
     */
    role?: GetUsersUserRoleEnum;
    /**
     * Status of user
     */
    status?: GetUsersUserStatusEnum;
    /**
     * Users Cvl type ID (shows up when status is LIVE)
     */
    userCvl?: string;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of all Users.
     */
    users?: GetUsersUser[];
}
