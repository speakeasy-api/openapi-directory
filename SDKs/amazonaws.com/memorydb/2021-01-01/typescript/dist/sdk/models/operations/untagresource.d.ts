import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UntagResourceXAmzTargetEnum {
    AmazonMemoryDBUntagResource = "AmazonMemoryDB.UntagResource"
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    untagResourceRequest: shared.UntagResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
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
     * TagNotFoundFault
     */
    tagNotFoundFault?: any;
    /**
     * Success
     */
    untagResourceResponse?: shared.UntagResourceResponse;
    /**
     * UserNotFoundFault
     */
    userNotFoundFault?: any;
}
