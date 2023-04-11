import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetParallelDataXAmzTargetEnum {
    AWSShineFrontendService20170701GetParallelData = "AWSShineFrontendService_20170701.GetParallelData"
}
export declare class GetParallelDataRequest extends SpeakeasyBase {
    getParallelDataRequest: shared.GetParallelDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetParallelDataXAmzTargetEnum;
}
export declare class GetParallelDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getParallelDataResponse?: shared.GetParallelDataResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
