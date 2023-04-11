import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTrialComponentXAmzTargetEnum {
    SageMakerUpdateTrialComponent = "SageMaker.UpdateTrialComponent"
}
export declare class UpdateTrialComponentRequest extends SpeakeasyBase {
    updateTrialComponentRequest: shared.UpdateTrialComponentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTrialComponentXAmzTargetEnum;
}
export declare class UpdateTrialComponentResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateTrialComponentResponse?: shared.UpdateTrialComponentResponse;
}
