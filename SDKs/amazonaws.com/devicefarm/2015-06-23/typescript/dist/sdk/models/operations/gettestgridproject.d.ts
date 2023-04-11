import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTestGridProjectXAmzTargetEnum {
    DeviceFarm20150623GetTestGridProject = "DeviceFarm_20150623.GetTestGridProject"
}
export declare class GetTestGridProjectRequest extends SpeakeasyBase {
    getTestGridProjectRequest: shared.GetTestGridProjectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTestGridProjectXAmzTargetEnum;
}
export declare class GetTestGridProjectResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    getTestGridProjectResult?: shared.GetTestGridProjectResult;
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
