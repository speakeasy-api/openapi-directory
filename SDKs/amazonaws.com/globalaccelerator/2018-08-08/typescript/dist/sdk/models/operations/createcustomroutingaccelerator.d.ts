import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateCustomRoutingAccelerator = "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator"
}
export declare class CreateCustomRoutingAcceleratorRequest extends SpeakeasyBase {
    createCustomRoutingAcceleratorRequest: shared.CreateCustomRoutingAcceleratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomRoutingAcceleratorXAmzTargetEnum;
}
export declare class CreateCustomRoutingAcceleratorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createCustomRoutingAcceleratorResponse?: shared.CreateCustomRoutingAcceleratorResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
