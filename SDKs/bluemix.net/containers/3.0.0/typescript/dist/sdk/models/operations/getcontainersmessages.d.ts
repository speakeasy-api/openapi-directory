import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetContainersMessagesRequest extends SpeakeasyBase {
    /**
     * The unique ID of your organization space where you want to create or work with your containers. To retrieve your space ID, run `cf space <space_name> --guid` and replace `<space_name>` with the name of the space where you want to create or work with your container.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
}
/**
 * OK. A list of messages is returned.
 */
export declare class GetContainersMessages200ApplicationJSON extends SpeakeasyBase {
    /**
     * Timestamp when the message was created.
     */
    createdDate?: string;
    /**
     * Important information for the IBM Containers user.
     */
    message?: string;
}
export declare class GetContainersMessagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK. A list of messages is returned.
     */
    getContainersMessages200ApplicationJSONObject?: GetContainersMessages200ApplicationJSON;
}
