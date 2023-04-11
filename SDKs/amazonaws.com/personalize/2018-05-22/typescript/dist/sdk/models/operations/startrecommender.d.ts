import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartRecommenderXAmzTargetEnum {
    AmazonPersonalizeStartRecommender = "AmazonPersonalize.StartRecommender"
}
export declare class StartRecommenderRequest extends SpeakeasyBase {
    startRecommenderRequest: shared.StartRecommenderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartRecommenderXAmzTargetEnum;
}
export declare class StartRecommenderResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    startRecommenderResponse?: shared.StartRecommenderResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
