import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTestGridProjectXAmzTargetEnum {
    DeviceFarm20150623CreateTestGridProject = "DeviceFarm_20150623.CreateTestGridProject"
}
export declare class CreateTestGridProjectRequest extends SpeakeasyBase {
    createTestGridProjectRequest: shared.CreateTestGridProjectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTestGridProjectXAmzTargetEnum;
}
export declare class CreateTestGridProjectResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    createTestGridProjectResult?: shared.CreateTestGridProjectResult;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
