import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteAccelerator = "GlobalAccelerator_V20180706.DeleteAccelerator"
}
export declare class DeleteAcceleratorRequest extends SpeakeasyBase {
    deleteAcceleratorRequest: shared.DeleteAcceleratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAcceleratorXAmzTargetEnum;
}
export declare class DeleteAcceleratorResponse extends SpeakeasyBase {
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
