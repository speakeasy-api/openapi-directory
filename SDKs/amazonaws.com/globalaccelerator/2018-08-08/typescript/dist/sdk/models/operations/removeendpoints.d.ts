import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveEndpointsXAmzTargetEnum {
    GlobalAcceleratorV20180706RemoveEndpoints = "GlobalAccelerator_V20180706.RemoveEndpoints"
}
export declare class RemoveEndpointsRequest extends SpeakeasyBase {
    removeEndpointsRequest: shared.RemoveEndpointsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveEndpointsXAmzTargetEnum;
}
export declare class RemoveEndpointsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    /**
     * TransactionInProgressException
     */
    transactionInProgressException?: any;
}
