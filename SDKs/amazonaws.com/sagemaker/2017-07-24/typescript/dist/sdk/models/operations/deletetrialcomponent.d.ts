import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTrialComponentXAmzTargetEnum {
    SageMakerDeleteTrialComponent = "SageMaker.DeleteTrialComponent"
}
export declare class DeleteTrialComponentRequest extends SpeakeasyBase {
    deleteTrialComponentRequest: shared.DeleteTrialComponentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTrialComponentXAmzTargetEnum;
}
export declare class DeleteTrialComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteTrialComponentResponse?: shared.DeleteTrialComponentResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
