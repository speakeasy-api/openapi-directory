import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdvertiseByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706AdvertiseByoipCidr = "GlobalAccelerator_V20180706.AdvertiseByoipCidr"
}
export declare class AdvertiseByoipCidrRequest extends SpeakeasyBase {
    advertiseByoipCidrRequest: shared.AdvertiseByoipCidrRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdvertiseByoipCidrXAmzTargetEnum;
}
export declare class AdvertiseByoipCidrResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    advertiseByoipCidrResponse?: shared.AdvertiseByoipCidrResponse;
    /**
     * ByoipCidrNotFoundException
     */
    byoipCidrNotFoundException?: any;
    contentType: string;
    /**
     * IncorrectCidrStateException
     */
    incorrectCidrStateException?: any;
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
