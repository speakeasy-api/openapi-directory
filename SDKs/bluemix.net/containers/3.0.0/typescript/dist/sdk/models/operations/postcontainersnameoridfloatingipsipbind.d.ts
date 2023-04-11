import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostContainersNameOrIdFloatingIpsIpBindRequest extends SpeakeasyBase {
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
    /**
     * The public IP address that you want to bind to your container.
     *
     * @remarks
     *
     * Note: The public IP address must be available in the space and not bound to a container. Run `cf ic ip list` or call the `GET /containers/floating-ips` endpoint.
     */
    ip: string;
    /**
     * The name or ID of the container that you want to bind to the public IP address. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space.
     */
    nameOrId: string;
}
export declare class PostContainersNameOrIdFloatingIpsIpBindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
