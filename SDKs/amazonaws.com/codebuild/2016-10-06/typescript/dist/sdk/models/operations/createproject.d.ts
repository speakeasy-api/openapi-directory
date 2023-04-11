import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateProjectXAmzTargetEnum {
    CodeBuild20161006CreateProject = "CodeBuild_20161006.CreateProject"
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
    /**
     * AccountLimitExceededException
     */
    accountLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    createProjectOutput?: shared.CreateProjectOutput;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
}
