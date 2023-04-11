import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEndpointsXAmzTargetEnum {
    SageMakerListEndpoints = "SageMaker.ListEndpoints"
}
export declare class ListEndpointsRequest extends SpeakeasyBase {
    listEndpointsInput: shared.ListEndpointsInput;
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
    xAmzTarget: ListEndpointsXAmzTargetEnum;
}
export declare class ListEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listEndpointsOutput?: shared.ListEndpointsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
