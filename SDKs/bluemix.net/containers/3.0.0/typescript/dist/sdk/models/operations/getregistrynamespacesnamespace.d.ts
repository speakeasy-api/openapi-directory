import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRegistryNamespacesNamespaceRequest extends SpeakeasyBase {
    /**
     * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
     */
    xAuthProjectId: string;
    /**
     * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
     */
    xAuthToken: string;
    /**
     * The name of the namespace that you would like to use for your organization and for which you would like to check availability in Bluemix.
     */
    namespace: string;
}
export declare class GetRegistryNamespacesNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. The namespace that you chose is already used in Bluemix. Choose another namespace and re-run the API call.
     */
    namespace?: shared.Namespace;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
