import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableEnhancedMonitoringXAmzTargetEnum {
    Kinesis20131202EnableEnhancedMonitoring = "Kinesis_20131202.EnableEnhancedMonitoring"
}
export declare class EnableEnhancedMonitoringRequest extends SpeakeasyBase {
    enableEnhancedMonitoringInput: shared.EnableEnhancedMonitoringInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableEnhancedMonitoringXAmzTargetEnum;
}
export declare class EnableEnhancedMonitoringResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    enhancedMonitoringOutput?: shared.EnhancedMonitoringOutput;
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
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
