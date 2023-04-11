import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteParallelDataXAmzTargetEnum {
    AWSShineFrontendService20170701DeleteParallelData = "AWSShineFrontendService_20170701.DeleteParallelData"
}
export declare class DeleteParallelDataRequest extends SpeakeasyBase {
    deleteParallelDataRequest: shared.DeleteParallelDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteParallelDataXAmzTargetEnum;
}
export declare class DeleteParallelDataResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteParallelDataResponse?: shared.DeleteParallelDataResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
