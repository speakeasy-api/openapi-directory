import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRecommenderXAmzTargetEnum {
    AmazonPersonalizeDeleteRecommender = "AmazonPersonalize.DeleteRecommender"
}
export declare class DeleteRecommenderRequest extends SpeakeasyBase {
    deleteRecommenderRequest: shared.DeleteRecommenderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRecommenderXAmzTargetEnum;
}
export declare class DeleteRecommenderResponse extends SpeakeasyBase {
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
}
