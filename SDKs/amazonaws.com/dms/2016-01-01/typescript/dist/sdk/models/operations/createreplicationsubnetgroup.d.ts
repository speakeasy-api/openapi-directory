import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateReplicationSubnetGroupXAmzTargetEnum {
    AmazonDMSv20160101CreateReplicationSubnetGroup = "AmazonDMSv20160101.CreateReplicationSubnetGroup"
}
export declare class CreateReplicationSubnetGroupRequest extends SpeakeasyBase {
    createReplicationSubnetGroupMessage: shared.CreateReplicationSubnetGroupMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReplicationSubnetGroupXAmzTargetEnum;
}
export declare class CreateReplicationSubnetGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * Success
     */
    createReplicationSubnetGroupResponse?: shared.CreateReplicationSubnetGroupResponse;
    /**
     * InvalidSubnet
     */
    invalidSubnet?: any;
    /**
     * ReplicationSubnetGroupDoesNotCoverEnoughAZs
     */
    replicationSubnetGroupDoesNotCoverEnoughAZs?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsFault
     */
    resourceAlreadyExistsFault?: any;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
}
