import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeObjectsXAmzTargetEnum {
    DataPipelineDescribeObjects = "DataPipeline.DescribeObjects"
}
export declare class DescribeObjectsRequest extends SpeakeasyBase {
    describeObjectsInput: shared.DescribeObjectsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeObjectsXAmzTargetEnum;
    /**
     * Pagination token
     */
    marker?: string;
}
export declare class DescribeObjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeObjectsOutput?: shared.DescribeObjectsOutput;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * PipelineDeletedException
     */
    pipelineDeletedException?: any;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
