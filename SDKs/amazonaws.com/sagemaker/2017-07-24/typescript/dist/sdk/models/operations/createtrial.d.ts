import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTrialXAmzTargetEnum {
    SageMakerCreateTrial = "SageMaker.CreateTrial"
}
export declare class CreateTrialRequest extends SpeakeasyBase {
    createTrialRequest: shared.CreateTrialRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTrialXAmzTargetEnum;
}
export declare class CreateTrialResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTrialResponse?: shared.CreateTrialResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
