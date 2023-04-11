import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContainersNameOrIdJsonRequest extends SpeakeasyBase {
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
    /**
     * The name or ID of the container that you want to inspect. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space.
     */
    nameOrId: string;
}
export declare class GetContainersNameOrIdJsonResponse extends SpeakeasyBase {
    /**
     * OK. A list with detailed information about the container is returned.
     */
    containerInfo?: shared.ContainerInfo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
