import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSubnetGroupXAmzTargetEnum {
    AmazonMemoryDBUpdateSubnetGroup = "AmazonMemoryDB.UpdateSubnetGroup"
}
export declare class UpdateSubnetGroupRequest extends SpeakeasyBase {
    updateSubnetGroupRequest: shared.UpdateSubnetGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSubnetGroupXAmzTargetEnum;
}
export declare class UpdateSubnetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidSubnet
     */
    invalidSubnet?: any;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SubnetGroupNotFoundFault
     */
    subnetGroupNotFoundFault?: any;
    /**
     * SubnetInUse
     */
    subnetInUse?: any;
    /**
     * SubnetNotAllowedFault
     */
    subnetNotAllowedFault?: any;
    /**
     * SubnetQuotaExceededFault
     */
    subnetQuotaExceededFault?: any;
    /**
     * Success
     */
    updateSubnetGroupResponse?: shared.UpdateSubnetGroupResponse;
}
