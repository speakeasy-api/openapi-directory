import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSubnetGroupXAmzTargetEnum {
    AmazonDaxv3CreateSubnetGroup = "AmazonDAXV3.CreateSubnetGroup"
}
export declare class CreateSubnetGroupRequest extends SpeakeasyBase {
    createSubnetGroupRequest: shared.CreateSubnetGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSubnetGroupXAmzTargetEnum;
}
export declare class CreateSubnetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSubnetGroupResponse?: shared.CreateSubnetGroupResponse;
    /**
     * InvalidSubnet
     */
    invalidSubnet?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    /**
     * SubnetGroupAlreadyExistsFault
     */
    subnetGroupAlreadyExistsFault?: any;
    /**
     * SubnetGroupQuotaExceededFault
     */
    subnetGroupQuotaExceededFault?: any;
    /**
     * SubnetQuotaExceededFault
     */
    subnetQuotaExceededFault?: any;
}
