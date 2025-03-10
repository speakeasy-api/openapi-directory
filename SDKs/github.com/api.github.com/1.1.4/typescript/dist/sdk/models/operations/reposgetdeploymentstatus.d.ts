import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetDeploymentStatusRequest extends SpeakeasyBase {
    /**
     * deployment_id parameter
     */
    deploymentId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    statusId: number;
}
export declare class ReposGetDeploymentStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    deploymentStatus?: shared.DeploymentStatus;
}
