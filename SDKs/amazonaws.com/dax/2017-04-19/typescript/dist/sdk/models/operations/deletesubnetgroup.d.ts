import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSubnetGroupXAmzTargetEnum {
    AmazonDaxv3DeleteSubnetGroup = "AmazonDAXV3.DeleteSubnetGroup"
}
export declare class DeleteSubnetGroupRequest extends SpeakeasyBase {
    deleteSubnetGroupRequest: shared.DeleteSubnetGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSubnetGroupXAmzTargetEnum;
}
export declare class DeleteSubnetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSubnetGroupResponse?: shared.DeleteSubnetGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    /**
     * SubnetGroupInUseFault
     */
    subnetGroupInUseFault?: any;
    /**
     * SubnetGroupNotFoundFault
     */
    subnetGroupNotFoundFault?: any;
}
