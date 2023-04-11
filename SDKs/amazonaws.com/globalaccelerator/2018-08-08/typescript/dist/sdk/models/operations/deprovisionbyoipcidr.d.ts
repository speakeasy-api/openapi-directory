import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeprovisionByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706DeprovisionByoipCidr = "GlobalAccelerator_V20180706.DeprovisionByoipCidr"
}
export declare class DeprovisionByoipCidrRequest extends SpeakeasyBase {
    deprovisionByoipCidrRequest: shared.DeprovisionByoipCidrRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprovisionByoipCidrXAmzTargetEnum;
}
export declare class DeprovisionByoipCidrResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ByoipCidrNotFoundException
     */
    byoipCidrNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    deprovisionByoipCidrResponse?: shared.DeprovisionByoipCidrResponse;
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
