import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostContainersCreateRequest extends SpeakeasyBase {
    /**
     * Summary of input parameter to create a container in IBM Containers.
     */
    createContainer: shared.CreateContainer;
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
    /**
     * Choose a name for your container. The characters in the name can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-), but the name must start with a letter.
     */
    name?: string;
}
export declare class PostContainersCreateResponse extends SpeakeasyBase {
    /**
     * OK. The creation of a single container with the specified attributes has been initiated.
     */
    containerId?: shared.ContainerId;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
