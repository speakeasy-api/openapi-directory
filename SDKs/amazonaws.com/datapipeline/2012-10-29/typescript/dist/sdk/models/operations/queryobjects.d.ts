import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum QueryObjectsXAmzTargetEnum {
    DataPipelineQueryObjects = "DataPipeline.QueryObjects"
}
export declare class QueryObjectsRequest extends SpeakeasyBase {
    queryObjectsInput: shared.QueryObjectsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: QueryObjectsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    marker?: string;
}
export declare class QueryObjectsResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    queryObjectsOutput?: shared.QueryObjectsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
