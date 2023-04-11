import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetActionTypeXAmzTargetEnum {
    CodePipeline20150709GetActionType = "CodePipeline_20150709.GetActionType"
}
export declare class GetActionTypeRequest extends SpeakeasyBase {
    getActionTypeInput: shared.GetActionTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetActionTypeXAmzTargetEnum;
}
export declare class GetActionTypeResponse extends SpeakeasyBase {
    /**
     * ActionTypeNotFoundException
     */
    actionTypeNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    getActionTypeOutput?: shared.GetActionTypeOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
