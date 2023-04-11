import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchStartRecommendationsXAmzTargetEnum {
    AmazonDMSv20160101BatchStartRecommendations = "AmazonDMSv20160101.BatchStartRecommendations"
}
export declare class BatchStartRecommendationsRequest extends SpeakeasyBase {
    batchStartRecommendationsRequest: shared.BatchStartRecommendationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchStartRecommendationsXAmzTargetEnum;
}
export declare class BatchStartRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    /**
     * Success
     */
    batchStartRecommendationsResponse?: shared.BatchStartRecommendationsResponse;
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
}
