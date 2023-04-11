import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The container provider type of the virtual cluster. Amazon EKS is the only supported type as of now.
 */
export declare enum ListVirtualClustersContainerProviderTypeEnum {
    Eks = "EKS"
}
export declare class ListVirtualClustersRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The container provider ID of the virtual cluster.
     */
    containerProviderId?: string;
    /**
     * The container provider type of the virtual cluster. Amazon EKS is the only supported type as of now.
     */
    containerProviderType?: ListVirtualClustersContainerProviderTypeEnum;
    /**
     * The date and time after which the virtual clusters are created.
     */
    createdAfter?: Date;
    /**
     * The date and time before which the virtual clusters are created.
     */
    createdBefore?: Date;
    /**
     * The maximum number of virtual clusters that can be listed.
     */
    maxResults?: number;
    /**
     * The token for the next set of virtual clusters to return.
     */
    nextToken?: string;
    /**
     * The states of the requested virtual clusters.
     */
    states?: shared.VirtualClusterStateEnum[];
}
export declare class ListVirtualClustersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listVirtualClustersResponse?: shared.ListVirtualClustersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
