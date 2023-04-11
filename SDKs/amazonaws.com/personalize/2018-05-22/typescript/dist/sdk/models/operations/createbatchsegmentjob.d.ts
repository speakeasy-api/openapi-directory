import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBatchSegmentJobXAmzTargetEnum {
    AmazonPersonalizeCreateBatchSegmentJob = "AmazonPersonalize.CreateBatchSegmentJob"
}
export declare class CreateBatchSegmentJobRequest extends SpeakeasyBase {
    createBatchSegmentJobRequest: shared.CreateBatchSegmentJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBatchSegmentJobXAmzTargetEnum;
}
export declare class CreateBatchSegmentJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createBatchSegmentJobResponse?: shared.CreateBatchSegmentJobResponse;
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
