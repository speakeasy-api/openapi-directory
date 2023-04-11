import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * Geolocation structure
 */
export declare class UserInfoAqLocation extends SpeakeasyBase {
    /**
     * OIDC Address structure
     */
    address?: Address;
    latitude?: number;
    longitude?: number;
}
/**
 * OIDC UserInfo structure
 */
export declare class UserInfo extends SpeakeasyBase {
    /**
     * OIDC Address structure
     */
    address?: Address;
    /**
     * Geolocation structure
     */
    aqLocation?: UserInfoAqLocation;
    email?: string;
    emailVerified?: boolean;
    familyName?: string;
    givenName?: string;
    name?: string;
    phoneNumber?: string;
    phoneNumberVerified?: boolean;
    sub: string;
}
