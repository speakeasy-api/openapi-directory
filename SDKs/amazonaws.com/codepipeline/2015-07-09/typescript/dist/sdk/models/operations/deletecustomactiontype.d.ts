import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCustomActionTypeXAmzTargetEnum {
    CodePipeline20150709DeleteCustomActionType = "CodePipeline_20150709.DeleteCustomActionType"
}
export declare class DeleteCustomActionTypeRequest extends SpeakeasyBase {
    deleteCustomActionTypeInput: shared.DeleteCustomActionTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCustomActionTypeXAmzTargetEnum;
}
export declare class DeleteCustomActionTypeResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
