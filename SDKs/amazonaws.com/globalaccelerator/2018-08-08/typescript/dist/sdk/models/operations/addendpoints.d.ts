import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddEndpointsXAmzTargetEnum {
    GlobalAcceleratorV20180706AddEndpoints = "GlobalAccelerator_V20180706.AddEndpoints"
}
export declare class AddEndpointsRequest extends SpeakeasyBase {
    addEndpointsRequest: shared.AddEndpointsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddEndpointsXAmzTargetEnum;
}
export declare class AddEndpointsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    addEndpointsResponse?: shared.AddEndpointsResponse;
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
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TransactionInProgressException
     */
    transactionInProgressException?: any;
}
