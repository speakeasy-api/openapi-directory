import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostContainersFloatingIpsRequestRequest extends SpeakeasyBase {
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
}
export declare class PostContainersFloatingIpsRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK. A new public IP address is allocated to your space.
     */
    postContainersFloatingIpsRequest200ApplicationJSONString?: string;
}
