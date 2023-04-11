import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostUsersUseridLinkSecurity extends SpeakeasyBase {
    clientAccessToken: string;
}
/**
 * Automatically skip to the credential input screen for this vendor, skipping the Vendor selection menu.
 */
export declare enum PostUsersUseridLinkRequestBodyVendorEnum {
    Tesla = "TESLA",
    Bmw = "BMW",
    Audi = "AUDI",
    Volkswagen = "VOLKSWAGEN",
    Hyundai = "HYUNDAI",
    Peugeot = "PEUGEOT",
    Nissan = "NISSAN"
}
export declare class PostUsersUseridLinkRequestBody extends SpeakeasyBase {
    /**
     * BCP47 language code - Force the Link UI to prefer the specified language. If omitted, the UI will default to the user's browser default language.
     */
    forceLanguage?: string;
    /**
     * Allow multiple car vendors to be linked during a single Link session. Automatically disabled if `vendor` is set.
     */
    linkMultiple?: boolean;
    /**
     * Full URL to an image that the user would recognize as being their own. This URL is only stored for the duration of the Link session, and is displayed to the user to reduce the effectiveness of phishing attacks.
     */
    userImage?: string;
    /**
     * The User's first name, full name, or other identifier that the user would recognize as being their own. This name is only stored for the duration of the Link session, and is displayed to the user to reduce the effectiveness of phishing attacks.
     */
    userName?: string;
    /**
     * Automatically skip to the credential input screen for this vendor, skipping the Vendor selection menu.
     */
    vendor?: PostUsersUseridLinkRequestBodyVendorEnum;
}
export declare class PostUsersUseridLinkRequest extends SpeakeasyBase {
    requestBody?: PostUsersUseridLinkRequestBody;
    /**
     * ID of the User
     */
    userId: string;
}
/**
 * Successful
 */
export declare class PostUsersUseridLink200ApplicationJSON extends SpeakeasyBase {
    linkState?: string;
}
export declare class PostUsersUseridLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    postUsersUseridLink200ApplicationJSONObject?: PostUsersUseridLink200ApplicationJSON;
}
