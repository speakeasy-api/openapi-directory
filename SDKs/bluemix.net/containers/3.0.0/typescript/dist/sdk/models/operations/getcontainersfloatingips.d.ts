import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContainersFloatingIpsRequest extends SpeakeasyBase {
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
    /**
     * If this option is set to `all=1`, `all=True`, or `all=true`, all public IP addresses that are allocated to a space are returned. If this option is set to `all=0`, `all=False`, or `all=false`, only available public IP addresses that are allocated but not bound to a container are returned. By default, only available public IP addresses are returned.
     */
    all?: boolean;
}
export declare class GetContainersFloatingIpsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. A list of public IP addresses that are allocated to the space is returned.
     */
    floatingIPS?: shared.FloatingIP[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
