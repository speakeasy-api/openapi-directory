import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ProvisionByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706ProvisionByoipCidr = "GlobalAccelerator_V20180706.ProvisionByoipCidr"
}
export declare class ProvisionByoipCidrRequest extends SpeakeasyBase {
    provisionByoipCidrRequest: shared.ProvisionByoipCidrRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ProvisionByoipCidrXAmzTargetEnum;
}
export declare class ProvisionByoipCidrResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    provisionByoipCidrResponse?: shared.ProvisionByoipCidrResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
