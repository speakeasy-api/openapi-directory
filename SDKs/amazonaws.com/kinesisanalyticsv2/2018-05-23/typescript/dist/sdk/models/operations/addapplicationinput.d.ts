import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationInputXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationInput = "KinesisAnalytics_20180523.AddApplicationInput"
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
    addApplicationInputResponse?: shared.AddApplicationInputResponse;
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
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
