import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateActionXAmzTargetEnum {
    SageMakerCreateAction = "SageMaker.CreateAction"
}
export declare class CreateActionRequest extends SpeakeasyBase {
    createActionRequest: shared.CreateActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateActionXAmzTargetEnum;
}
export declare class CreateActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createActionResponse?: shared.CreateActionResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
