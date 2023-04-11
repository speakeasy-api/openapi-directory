import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyReplicationSubnetGroupXAmzTargetEnum {
    AmazonDMSv20160101ModifyReplicationSubnetGroup = "AmazonDMSv20160101.ModifyReplicationSubnetGroup"
}
export declare class ModifyReplicationSubnetGroupRequest extends SpeakeasyBase {
    modifyReplicationSubnetGroupMessage: shared.ModifyReplicationSubnetGroupMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyReplicationSubnetGroupXAmzTargetEnum;
}
export declare class ModifyReplicationSubnetGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * InvalidSubnet
     */
    invalidSubnet?: any;
    /**
     * Success
     */
    modifyReplicationSubnetGroupResponse?: shared.ModifyReplicationSubnetGroupResponse;
    /**
     * ReplicationSubnetGroupDoesNotCoverEnoughAZs
     */
    replicationSubnetGroupDoesNotCoverEnoughAZs?: any;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * SubnetAlreadyInUse
     */
    subnetAlreadyInUse?: any;
}
