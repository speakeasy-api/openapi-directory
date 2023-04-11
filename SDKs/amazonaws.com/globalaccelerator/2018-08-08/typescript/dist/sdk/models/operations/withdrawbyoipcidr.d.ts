import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum WithdrawByoipCidrXAmzTargetEnum {
    GlobalAcceleratorV20180706WithdrawByoipCidr = "GlobalAccelerator_V20180706.WithdrawByoipCidr"
}
export declare class WithdrawByoipCidrRequest extends SpeakeasyBase {
    withdrawByoipCidrRequest: shared.WithdrawByoipCidrRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: WithdrawByoipCidrXAmzTargetEnum;
}
export declare class WithdrawByoipCidrResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    withdrawByoipCidrResponse?: shared.WithdrawByoipCidrResponse;
}
