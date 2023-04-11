import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryDeleteApiDeploymentRequest extends SpeakeasyBase {
    /**
     * The api id.
     */
    api: string;
    /**
     * The deployment id.
     */
    deployment: string;
    /**
     * If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
     */
    force?: boolean;
    /**
     * The location id.
     */
    location: string;
    /**
     * The project id.
     */
    project: string;
}
export declare class RegistryDeleteApiDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Default error response
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
