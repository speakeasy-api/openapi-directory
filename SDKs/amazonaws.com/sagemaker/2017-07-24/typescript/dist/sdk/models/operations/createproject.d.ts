import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateProjectXAmzTargetEnum {
    SageMakerCreateProject = "SageMaker.CreateProject"
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    createProjectInput: shared.CreateProjectInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProjectXAmzTargetEnum;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createProjectOutput?: shared.CreateProjectOutput;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
