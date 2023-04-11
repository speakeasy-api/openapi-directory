import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEndpointConfigsXAmzTargetEnum {
    SageMakerListEndpointConfigs = "SageMaker.ListEndpointConfigs"
}
export declare class ListEndpointConfigsRequest extends SpeakeasyBase {
    listEndpointConfigsInput: shared.ListEndpointConfigsInput;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEndpointConfigsXAmzTargetEnum;
}
export declare class ListEndpointConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listEndpointConfigsOutput?: shared.ListEndpointConfigsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
