import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateActionTypeXAmzTargetEnum {
    CodePipeline20150709UpdateActionType = "CodePipeline_20150709.UpdateActionType"
}
export declare class UpdateActionTypeRequest extends SpeakeasyBase {
    updateActionTypeInput: shared.UpdateActionTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateActionTypeXAmzTargetEnum;
}
export declare class UpdateActionTypeResponse extends SpeakeasyBase {
    /**
     * ActionTypeNotFoundException
     */
    actionTypeNotFoundException?: any;
    contentType: string;
    /**
     * RequestFailedException
     */
    requestFailedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
