import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTestGridProjectXAmzTargetEnum {
    DeviceFarm20150623DeleteTestGridProject = "DeviceFarm_20150623.DeleteTestGridProject"
}
export declare class DeleteTestGridProjectRequest extends SpeakeasyBase {
    deleteTestGridProjectRequest: shared.DeleteTestGridProjectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTestGridProjectXAmzTargetEnum;
}
export declare class DeleteTestGridProjectResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    /**
     * CannotDeleteException
     */
    cannotDeleteException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteTestGridProjectResult?: Record<string, any>;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
