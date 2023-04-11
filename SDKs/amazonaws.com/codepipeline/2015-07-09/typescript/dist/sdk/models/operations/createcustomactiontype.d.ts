import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCustomActionTypeXAmzTargetEnum {
    CodePipeline20150709CreateCustomActionType = "CodePipeline_20150709.CreateCustomActionType"
}
export declare class CreateCustomActionTypeRequest extends SpeakeasyBase {
    createCustomActionTypeInput: shared.CreateCustomActionTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomActionTypeXAmzTargetEnum;
}
export declare class CreateCustomActionTypeResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createCustomActionTypeOutput?: shared.CreateCustomActionTypeOutput;
    /**
     * InvalidTagsException
     */
    invalidTagsException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
