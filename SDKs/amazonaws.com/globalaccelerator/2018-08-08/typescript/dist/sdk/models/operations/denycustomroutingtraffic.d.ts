import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DenyCustomRoutingTrafficXAmzTargetEnum {
    GlobalAcceleratorV20180706DenyCustomRoutingTraffic = "GlobalAccelerator_V20180706.DenyCustomRoutingTraffic"
}
export declare class DenyCustomRoutingTrafficRequest extends SpeakeasyBase {
    denyCustomRoutingTrafficRequest: shared.DenyCustomRoutingTrafficRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DenyCustomRoutingTrafficXAmzTargetEnum;
}
export declare class DenyCustomRoutingTrafficResponse extends SpeakeasyBase {
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
