import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteEndpointGroup = "GlobalAccelerator_V20180706.DeleteEndpointGroup"
}
export declare class DeleteEndpointGroupRequest extends SpeakeasyBase {
    deleteEndpointGroupRequest: shared.DeleteEndpointGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEndpointGroupXAmzTargetEnum;
}
export declare class DeleteEndpointGroupResponse extends SpeakeasyBase {
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
