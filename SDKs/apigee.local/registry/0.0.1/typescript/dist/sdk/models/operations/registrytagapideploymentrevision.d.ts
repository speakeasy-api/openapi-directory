import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryTagApiDeploymentRevisionRequest extends SpeakeasyBase {
    tagApiDeploymentRevisionRequest: shared.TagApiDeploymentRevisionRequest;
    /**
     * The api id.
     */
    api: string;
    /**
     * The deployment id.
     */
    deployment: string;
    /**
     * The location id.
     */
    location: string;
    /**
     * The project id.
     */
    project: string;
}
export declare class RegistryTagApiDeploymentRevisionResponse extends SpeakeasyBase {
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
