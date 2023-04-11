import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopRecommenderXAmzTargetEnum {
    AmazonPersonalizeStopRecommender = "AmazonPersonalize.StopRecommender"
}
export declare class StopRecommenderRequest extends SpeakeasyBase {
    stopRecommenderRequest: shared.StopRecommenderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopRecommenderXAmzTargetEnum;
}
export declare class StopRecommenderResponse extends SpeakeasyBase {
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
    stopRecommenderResponse?: shared.StopRecommenderResponse;
}
