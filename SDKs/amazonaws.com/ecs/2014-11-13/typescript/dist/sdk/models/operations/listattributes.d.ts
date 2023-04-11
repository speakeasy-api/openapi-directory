import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAttributesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListAttributes = "AmazonEC2ContainerServiceV20141113.ListAttributes"
}
export declare class ListAttributesRequest extends SpeakeasyBase {
    listAttributesRequest: shared.ListAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAttributesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListAttributesResponse extends SpeakeasyBase {
    /**
     * ClusterNotFoundException
     */
    clusterNotFoundException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listAttributesResponse?: shared.ListAttributesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
