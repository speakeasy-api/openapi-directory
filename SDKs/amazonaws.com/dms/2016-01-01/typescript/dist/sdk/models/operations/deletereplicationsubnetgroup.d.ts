import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteReplicationSubnetGroupXAmzTargetEnum {
    AmazonDMSv20160101DeleteReplicationSubnetGroup = "AmazonDMSv20160101.DeleteReplicationSubnetGroup"
}
export declare class DeleteReplicationSubnetGroupRequest extends SpeakeasyBase {
    deleteReplicationSubnetGroupMessage: shared.DeleteReplicationSubnetGroupMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReplicationSubnetGroupXAmzTargetEnum;
}
export declare class DeleteReplicationSubnetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteReplicationSubnetGroupResponse?: Record<string, any>;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
}
