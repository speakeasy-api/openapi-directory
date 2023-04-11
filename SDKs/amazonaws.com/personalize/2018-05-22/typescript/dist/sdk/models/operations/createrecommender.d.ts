import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRecommenderXAmzTargetEnum {
    AmazonPersonalizeCreateRecommender = "AmazonPersonalize.CreateRecommender"
}
export declare class CreateRecommenderRequest extends SpeakeasyBase {
    createRecommenderRequest: shared.CreateRecommenderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRecommenderXAmzTargetEnum;
}
export declare class CreateRecommenderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRecommenderResponse?: shared.CreateRecommenderResponse;
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
