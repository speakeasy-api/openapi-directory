import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateProjectXAmzTargetEnum {
    CodeStar20170419CreateProject = "CodeStar_20170419.CreateProject"
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    createProjectRequest: shared.CreateProjectRequest;
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
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createProjectResult?: shared.CreateProjectResult;
    /**
     * InvalidServiceRoleException
     */
    invalidServiceRoleException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ProjectAlreadyExistsException
     */
    projectAlreadyExistsException?: any;
    /**
     * ProjectConfigurationException
     */
    projectConfigurationException?: any;
    /**
     * ProjectCreationFailedException
     */
    projectCreationFailedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
