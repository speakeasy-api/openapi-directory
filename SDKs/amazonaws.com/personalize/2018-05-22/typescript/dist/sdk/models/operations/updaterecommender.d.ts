import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRecommenderXAmzTargetEnum {
    AmazonPersonalizeUpdateRecommender = "AmazonPersonalize.UpdateRecommender"
}
export declare class UpdateRecommenderRequest extends SpeakeasyBase {
    updateRecommenderRequest: shared.UpdateRecommenderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRecommenderXAmzTargetEnum;
}
export declare class UpdateRecommenderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
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
     * Success
     */
    updateRecommenderResponse?: shared.UpdateRecommenderResponse;
}
