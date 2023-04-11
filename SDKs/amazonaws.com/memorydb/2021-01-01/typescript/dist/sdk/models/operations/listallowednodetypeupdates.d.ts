import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAllowedNodeTypeUpdatesXAmzTargetEnum {
    AmazonMemoryDBListAllowedNodeTypeUpdates = "AmazonMemoryDB.ListAllowedNodeTypeUpdates"
}
export declare class ListAllowedNodeTypeUpdatesRequest extends SpeakeasyBase {
    listAllowedNodeTypeUpdatesRequest: shared.ListAllowedNodeTypeUpdatesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAllowedNodeTypeUpdatesXAmzTargetEnum;
}
export declare class ListAllowedNodeTypeUpdatesResponse extends SpeakeasyBase {
    /**
     * ClusterNotFoundFault
     */
    clusterNotFoundFault?: any;
    contentType: string;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    listAllowedNodeTypeUpdatesResponse?: shared.ListAllowedNodeTypeUpdatesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
}
