import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateContextXAmzTargetEnum {
    SageMakerCreateContext = "SageMaker.CreateContext"
}
export declare class CreateContextRequest extends SpeakeasyBase {
    createContextRequest: shared.CreateContextRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContextXAmzTargetEnum;
}
export declare class CreateContextResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createContextResponse?: shared.CreateContextResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
