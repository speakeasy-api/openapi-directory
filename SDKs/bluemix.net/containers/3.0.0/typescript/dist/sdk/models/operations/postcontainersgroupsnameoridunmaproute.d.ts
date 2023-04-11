import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostContainersGroupsNameOrIdUnmaprouteRequest extends SpeakeasyBase {
    /**
     * The public route that is unmapped from the container group. A public route consists of the host name and domain.
     */
    route: shared.Route;
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
    /**
     * The name or unique ID (UUID) of the container group that you want to inspect.
     */
    nameOrId: string;
}
export declare class PostContainersGroupsNameOrIdUnmaprouteResponse extends SpeakeasyBase {
    /**
     * OK. The route that you specified was successfully unmapped from the container group.
     */
    containersGroupsNameOrIdMaproutePostInfo?: shared.ContainersGroupsNameOrIdMaproutePostInfo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
