import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImagesNameOrIdJsonRequest extends SpeakeasyBase {
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
    /**
     * The full private Bluemix registry path to your image or the unique ID of the image that you want to inspect. Run `cf ic images` or call the `GET /images/json` endpoint to review the images in your private Bluemix registry.
     */
    nameOrId: string;
}
export declare class GetImagesNameOrIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. A list of details about the container image is returned.
     */
    imageDetail?: shared.ImageDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
