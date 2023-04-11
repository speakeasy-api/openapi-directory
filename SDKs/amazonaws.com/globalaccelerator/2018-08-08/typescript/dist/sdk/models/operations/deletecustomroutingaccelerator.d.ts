import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteCustomRoutingAccelerator = "GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator"
}
export declare class DeleteCustomRoutingAcceleratorRequest extends SpeakeasyBase {
    deleteCustomRoutingAcceleratorRequest: shared.DeleteCustomRoutingAcceleratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCustomRoutingAcceleratorXAmzTargetEnum;
}
export declare class DeleteCustomRoutingAcceleratorResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotDisabledException
     */
    acceleratorNotDisabledException?: any;
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    /**
     * AssociatedListenerFoundException
     */
    associatedListenerFoundException?: any;
    contentType: string;
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
