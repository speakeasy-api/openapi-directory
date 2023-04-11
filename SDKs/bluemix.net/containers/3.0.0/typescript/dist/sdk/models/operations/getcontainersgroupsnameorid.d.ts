import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContainersGroupsNameOrIdRequest extends SpeakeasyBase {
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
    /**
     * The name or unique ID of the container group that you want to inspect. Run `cf ic group list` or call the `GET /containers/groups` endpoint to retrieve a list of container groups in your space.
     */
    nameOrId: string;
}
export declare class GetContainersGroupsNameOrIdResponse extends SpeakeasyBase {
    /**
     * OK. A detailed list of information about a container group is retrieved.
     */
    containersGroupsNameOrIdGetDetails?: shared.ContainersGroupsNameOrIdGetDetails;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
