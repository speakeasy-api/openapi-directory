import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsXAmzTargetEnum {
    AmazonMemoryDBListTags = "AmazonMemoryDB.ListTags"
}
export declare class ListTagsRequest extends SpeakeasyBase {
    listTagsRequest: shared.ListTagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsXAmzTargetEnum;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    /**
     * ACLNotFoundFault
     */
    aclNotFoundFault?: any;
    /**
     * ClusterNotFoundFault
     */
    clusterNotFoundFault?: any;
    contentType: string;
    /**
     * InvalidARNFault
     */
    invalidARNFault?: any;
    /**
     * InvalidClusterStateFault
     */
    invalidClusterStateFault?: any;
    /**
     * Success
     */
    listTagsResponse?: shared.ListTagsResponse;
    /**
     * ParameterGroupNotFoundFault
     */
    parameterGroupNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    /**
     * SnapshotNotFoundFault
     */
    snapshotNotFoundFault?: any;
    /**
     * SubnetGroupNotFoundFault
     */
    subnetGroupNotFoundFault?: any;
    /**
     * UserNotFoundFault
     */
    userNotFoundFault?: any;
}
