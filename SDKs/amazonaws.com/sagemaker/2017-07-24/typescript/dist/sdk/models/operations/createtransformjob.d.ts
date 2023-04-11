import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTransformJobXAmzTargetEnum {
    SageMakerCreateTransformJob = "SageMaker.CreateTransformJob"
}
export declare class CreateTransformJobRequest extends SpeakeasyBase {
    createTransformJobRequest: shared.CreateTransformJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTransformJobXAmzTargetEnum;
}
export declare class CreateTransformJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTransformJobResponse?: shared.CreateTransformJobResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
