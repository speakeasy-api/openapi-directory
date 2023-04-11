import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServicesByNamespaceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListServicesByNamespace = "AmazonEC2ContainerServiceV20141113.ListServicesByNamespace"
}
export declare class ListServicesByNamespaceRequest extends SpeakeasyBase {
    listServicesByNamespaceRequest: shared.ListServicesByNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServicesByNamespaceXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListServicesByNamespaceResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listServicesByNamespaceResponse?: shared.ListServicesByNamespaceResponse;
    /**
     * NamespaceNotFoundException
     */
    namespaceNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
