import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBatchInferenceJobXAmzTargetEnum {
    AmazonPersonalizeCreateBatchInferenceJob = "AmazonPersonalize.CreateBatchInferenceJob"
}
export declare class CreateBatchInferenceJobRequest extends SpeakeasyBase {
    createBatchInferenceJobRequest: shared.CreateBatchInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBatchInferenceJobXAmzTargetEnum;
}
export declare class CreateBatchInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createBatchInferenceJobResponse?: shared.CreateBatchInferenceJobResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
