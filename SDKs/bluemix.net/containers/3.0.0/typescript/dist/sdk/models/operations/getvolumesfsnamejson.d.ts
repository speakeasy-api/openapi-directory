import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVolumesFsNameJsonRequest extends SpeakeasyBase {
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
    /**
     * The name of the file share that you want to inspect. Run `cf ic volume fs-list` or call the `GET /volumes/fs/json` endpoint to retrieve a list of available file shares in your space.
     */
    name: string;
}
export declare class GetVolumesFsNameJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. Detailed information about a file share is returned.
     */
    getFileshareDetails?: shared.GetFileshareDetails[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
