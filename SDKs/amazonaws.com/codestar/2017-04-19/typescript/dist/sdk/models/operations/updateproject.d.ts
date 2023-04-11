import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateProjectXAmzTargetEnum {
    CodeStar20170419UpdateProject = "CodeStar_20170419.UpdateProject"
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    updateProjectRequest: shared.UpdateProjectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProjectXAmzTargetEnum;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFoundException
     */
    projectNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateProjectResult?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
