import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AllowCustomRoutingTrafficXAmzTargetEnum {
    GlobalAcceleratorV20180706AllowCustomRoutingTraffic = "GlobalAccelerator_V20180706.AllowCustomRoutingTraffic"
}
export declare class AllowCustomRoutingTrafficRequest extends SpeakeasyBase {
    allowCustomRoutingTrafficRequest: shared.AllowCustomRoutingTrafficRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllowCustomRoutingTrafficXAmzTargetEnum;
}
export declare class AllowCustomRoutingTrafficResponse extends SpeakeasyBase {
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
