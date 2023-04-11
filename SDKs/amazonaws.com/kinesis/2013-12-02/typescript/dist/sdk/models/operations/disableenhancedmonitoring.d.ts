import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableEnhancedMonitoringXAmzTargetEnum {
    Kinesis20131202DisableEnhancedMonitoring = "Kinesis_20131202.DisableEnhancedMonitoring"
}
export declare class DisableEnhancedMonitoringRequest extends SpeakeasyBase {
    disableEnhancedMonitoringInput: shared.DisableEnhancedMonitoringInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableEnhancedMonitoringXAmzTargetEnum;
}
export declare class DisableEnhancedMonitoringResponse extends SpeakeasyBase {
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
