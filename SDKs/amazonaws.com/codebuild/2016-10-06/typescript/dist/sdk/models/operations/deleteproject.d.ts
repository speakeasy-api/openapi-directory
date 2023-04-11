import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteProjectXAmzTargetEnum {
    CodeBuild20161006DeleteProject = "CodeBuild_20161006.DeleteProject"
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    deleteProjectInput: shared.DeleteProjectInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProjectXAmzTargetEnum;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteProjectOutput?: Record<string, any>;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
