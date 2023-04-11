import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryCreateApiDeploymentRequest extends SpeakeasyBase {
    apiDeploymentInput: shared.ApiDeploymentInput;
    /**
     * The api id.
     */
    api: string;
    /**
     * Required. The ID to use for the deployment, which will become the final component of the deployment's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.
     */
    apiDeploymentId?: string;
    /**
     * The location id.
     */
    location: string;
    /**
     * The project id.
     */
    project: string;
}
export declare class RegistryCreateApiDeploymentResponse extends SpeakeasyBase {
    /**
     * OK
     */
    apiDeployment?: shared.ApiDeployment;
    contentType: string;
    /**
     * Default error response
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
