import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetProfileImageRequest extends SpeakeasyBase {
    /**
     * The parameter is the username of the user or the username of the organization.
     */
    username: string;
}
export declare class GetProfileImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An object containing profile image details
     */
    getProfileImage200ApplicationJSONObject?: Record<string, any>;
}
