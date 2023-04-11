import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBatchLoadTaskXAmzTargetEnum {
    Timestream20181101DescribeBatchLoadTask = "Timestream_20181101.DescribeBatchLoadTask"
}
export declare class DescribeBatchLoadTaskRequest extends SpeakeasyBase {
    describeBatchLoadTaskRequest: shared.DescribeBatchLoadTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBatchLoadTaskXAmzTargetEnum;
}
export declare class DescribeBatchLoadTaskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeBatchLoadTaskResponse?: shared.DescribeBatchLoadTaskResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidEndpointException
     */
    invalidEndpointException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
