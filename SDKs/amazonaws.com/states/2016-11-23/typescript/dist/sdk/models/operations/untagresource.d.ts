import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UntagResourceXAmzTargetEnum {
    AWSStepFunctionsUntagResource = "AWSStepFunctions.UntagResource"
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    untagResourceInput: shared.UntagResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    untagResourceOutput?: Record<string, any>;
}
