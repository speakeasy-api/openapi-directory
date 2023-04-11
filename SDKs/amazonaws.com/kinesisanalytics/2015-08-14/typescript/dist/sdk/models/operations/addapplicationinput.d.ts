import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationInputXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationInput = "KinesisAnalytics_20150814.AddApplicationInput"
}
export declare class AddApplicationInputRequest extends SpeakeasyBase {
    addApplicationInputRequest: shared.AddApplicationInputRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationInputXAmzTargetEnum;
}
export declare class AddApplicationInputResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addApplicationInputResponse?: Record<string, any>;
    /**
     * CodeValidationException
     */
    codeValidationException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
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
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
