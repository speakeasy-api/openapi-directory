import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DecreaseStreamRetentionPeriodXAmzTargetEnum {
    Kinesis20131202DecreaseStreamRetentionPeriod = "Kinesis_20131202.DecreaseStreamRetentionPeriod"
}
export declare class DecreaseStreamRetentionPeriodRequest extends SpeakeasyBase {
    decreaseStreamRetentionPeriodInput: shared.DecreaseStreamRetentionPeriodInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DecreaseStreamRetentionPeriodXAmzTargetEnum;
}
export declare class DecreaseStreamRetentionPeriodResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
