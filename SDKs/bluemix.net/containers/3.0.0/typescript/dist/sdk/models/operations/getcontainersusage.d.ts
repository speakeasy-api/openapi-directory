import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContainersUsageRequest extends SpeakeasyBase {
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
}
export declare class GetContainersUsageResponse extends SpeakeasyBase {
    /**
     * OK. A list of available container sizes as well as the quota limit and usage for a space is returned.
     */
    containersUsageInfo?: shared.ContainersUsageInfo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
