import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostVolumesNameRequest extends SpeakeasyBase {
    /**
     * Input parameter that are required to provision an existing volume to a new space and to unprovision it from a space.
     */
    updateVolume: shared.UpdateVolume;
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
    /**
     * The name of the volume that you want to share with another space in your organization.
     */
    name: string;
}
export declare class PostVolumesNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Ok. A list with detailed information about the volume is returned. Review the changes in the `otherSpaceVisibility` property.
     */
    volume?: shared.Volume;
}
