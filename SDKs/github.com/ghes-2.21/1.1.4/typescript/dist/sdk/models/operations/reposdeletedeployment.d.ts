import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposDeleteDeploymentRequest extends SpeakeasyBase {
    /**
     * deployment_id parameter
     */
    deploymentId: number;
    owner: string;
    repo: string;
}
export declare class ReposDeleteDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
