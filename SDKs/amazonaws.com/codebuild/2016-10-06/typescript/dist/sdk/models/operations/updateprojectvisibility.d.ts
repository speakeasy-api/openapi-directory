import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateProjectVisibilityXAmzTargetEnum {
    CodeBuild20161006UpdateProjectVisibility = "CodeBuild_20161006.UpdateProjectVisibility"
}
export declare class UpdateProjectVisibilityRequest extends SpeakeasyBase {
    updateProjectVisibilityInput: shared.UpdateProjectVisibilityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProjectVisibilityXAmzTargetEnum;
}
export declare class UpdateProjectVisibilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateProjectVisibilityOutput?: shared.UpdateProjectVisibilityOutput;
}
