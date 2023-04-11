import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTestGridProjectXAmzTargetEnum {
    DeviceFarm20150623UpdateTestGridProject = "DeviceFarm_20150623.UpdateTestGridProject"
}
export declare class UpdateTestGridProjectRequest extends SpeakeasyBase {
    updateTestGridProjectRequest: shared.UpdateTestGridProjectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTestGridProjectXAmzTargetEnum;
}
export declare class UpdateTestGridProjectResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
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
     * Success
     */
    updateTestGridProjectResult?: shared.UpdateTestGridProjectResult;
}
