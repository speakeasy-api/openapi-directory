import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPipelinesXAmzTargetEnum {
    DataPipelineListPipelines = "DataPipeline.ListPipelines"
}
export declare class ListPipelinesRequest extends SpeakeasyBase {
    listPipelinesInput: shared.ListPipelinesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPipelinesXAmzTargetEnum;
    /**
     * Pagination token
     */
    marker?: string;
}
export declare class ListPipelinesResponse extends SpeakeasyBase {
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
     * Success
     */
    listPipelinesOutput?: shared.ListPipelinesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
