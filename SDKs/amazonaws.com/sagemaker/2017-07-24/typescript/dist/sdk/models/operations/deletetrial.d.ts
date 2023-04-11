import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTrialXAmzTargetEnum {
    SageMakerDeleteTrial = "SageMaker.DeleteTrial"
}
export declare class DeleteTrialRequest extends SpeakeasyBase {
    deleteTrialRequest: shared.DeleteTrialRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTrialXAmzTargetEnum;
}
export declare class DeleteTrialResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteTrialResponse?: shared.DeleteTrialResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
