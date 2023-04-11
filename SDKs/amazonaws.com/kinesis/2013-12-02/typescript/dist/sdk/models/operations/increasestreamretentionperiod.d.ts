import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum IncreaseStreamRetentionPeriodXAmzTargetEnum {
    Kinesis20131202IncreaseStreamRetentionPeriod = "Kinesis_20131202.IncreaseStreamRetentionPeriod"
}
export declare class IncreaseStreamRetentionPeriodRequest extends SpeakeasyBase {
    increaseStreamRetentionPeriodInput: shared.IncreaseStreamRetentionPeriodInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: IncreaseStreamRetentionPeriodXAmzTargetEnum;
}
export declare class IncreaseStreamRetentionPeriodResponse extends SpeakeasyBase {
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
