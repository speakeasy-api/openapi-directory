import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTrialComponentXAmzTargetEnum {
    SageMakerCreateTrialComponent = "SageMaker.CreateTrialComponent"
}
export declare class CreateTrialComponentRequest extends SpeakeasyBase {
    createTrialComponentRequest: shared.CreateTrialComponentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTrialComponentXAmzTargetEnum;
}
export declare class CreateTrialComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTrialComponentResponse?: shared.CreateTrialComponentResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
