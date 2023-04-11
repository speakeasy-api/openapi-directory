import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TagResourceXAmzTargetEnum {
    AmazonMemoryDBTagResource = "AmazonMemoryDB.TagResource"
}
export declare class TagResourceRequest extends SpeakeasyBase {
    tagResourceRequest: shared.TagResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceResponse extends SpeakeasyBase {
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
     * ParameterGroupNotFoundFault
     */
    parameterGroupNotFoundFault?: any;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    /**
     * SnapshotNotFoundFault
     */
    snapshotNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SubnetGroupNotFoundFault
     */
    subnetGroupNotFoundFault?: any;
    /**
     * TagQuotaPerResourceExceeded
     */
    tagQuotaPerResourceExceeded?: any;
    /**
     * Success
     */
    tagResourceResponse?: shared.TagResourceResponse;
    /**
     * UserNotFoundFault
     */
    userNotFoundFault?: any;
}
