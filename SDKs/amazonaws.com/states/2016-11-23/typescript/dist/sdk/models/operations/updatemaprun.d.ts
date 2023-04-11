import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMapRunXAmzTargetEnum {
    AWSStepFunctionsUpdateMapRun = "AWSStepFunctions.UpdateMapRun"
}
export declare class UpdateMapRunRequest extends SpeakeasyBase {
    updateMapRunInput: shared.UpdateMapRunInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMapRunXAmzTargetEnum;
}
export declare class UpdateMapRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    updateMapRunOutput?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
