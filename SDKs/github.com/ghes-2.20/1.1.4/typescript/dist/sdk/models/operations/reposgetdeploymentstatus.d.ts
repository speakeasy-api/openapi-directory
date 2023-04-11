import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetDeploymentStatusRequest extends SpeakeasyBase {
    /**
     * deployment_id parameter
     */
    deploymentId: number;
    owner: string;
    repo: string;
    statusId: number;
}
/**
 * Preview header missing
 */
export declare class ReposGetDeploymentStatus415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
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
    /**
     * Preview header missing
     */
    reposGetDeploymentStatus415ApplicationJSONObject?: ReposGetDeploymentStatus415ApplicationJSON;
}
