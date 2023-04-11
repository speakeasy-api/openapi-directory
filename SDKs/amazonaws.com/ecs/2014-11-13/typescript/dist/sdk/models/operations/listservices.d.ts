import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServicesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListServices = "AmazonEC2ContainerServiceV20141113.ListServices"
}
export declare class ListServicesRequest extends SpeakeasyBase {
    listServicesRequest: shared.ListServicesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServicesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListServicesResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
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
    listServicesResponse?: shared.ListServicesResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
