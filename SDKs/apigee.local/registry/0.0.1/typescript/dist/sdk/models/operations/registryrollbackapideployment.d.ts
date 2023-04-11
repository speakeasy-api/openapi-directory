import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryRollbackApiDeploymentRequest extends SpeakeasyBase {
    rollbackApiDeploymentRequest: shared.RollbackApiDeploymentRequest;
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
export declare class RegistryRollbackApiDeploymentResponse extends SpeakeasyBase {
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
