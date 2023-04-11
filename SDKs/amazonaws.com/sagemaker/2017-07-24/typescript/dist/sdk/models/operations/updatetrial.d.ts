import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTrialXAmzTargetEnum {
    SageMakerUpdateTrial = "SageMaker.UpdateTrial"
}
export declare class UpdateTrialRequest extends SpeakeasyBase {
    updateTrialRequest: shared.UpdateTrialRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTrialXAmzTargetEnum;
}
export declare class UpdateTrialResponse extends SpeakeasyBase {
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
    updateTrialResponse?: shared.UpdateTrialResponse;
}
