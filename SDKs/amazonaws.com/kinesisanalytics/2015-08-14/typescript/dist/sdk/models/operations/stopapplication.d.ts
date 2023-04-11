import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopApplicationXAmzTargetEnum {
    KinesisAnalytics20150814StopApplication = "KinesisAnalytics_20150814.StopApplication"
}
export declare class StopApplicationRequest extends SpeakeasyBase {
    stopApplicationRequest: shared.StopApplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopApplicationXAmzTargetEnum;
}
export declare class StopApplicationResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    stopApplicationResponse?: Record<string, any>;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
