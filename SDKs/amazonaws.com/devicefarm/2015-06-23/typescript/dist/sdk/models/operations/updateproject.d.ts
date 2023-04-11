import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateProjectXAmzTargetEnum {
    DeviceFarm20150623UpdateProject = "DeviceFarm_20150623.UpdateProject"
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
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    /**
     * Success
     */
    updateProjectResult?: shared.UpdateProjectResult;
}
