import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCustomRoutingEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroup = "GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup"
}
export declare class DeleteCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
    deleteCustomRoutingEndpointGroupRequest: shared.DeleteCustomRoutingEndpointGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCustomRoutingEndpointGroupXAmzTargetEnum;
}
export declare class DeleteCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EndpointGroupNotFoundException
     */
    endpointGroupNotFoundException?: any;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
