import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFlywheelIterationHistoryXAmzTargetEnum {
    Comprehend20171127ListFlywheelIterationHistory = "Comprehend_20171127.ListFlywheelIterationHistory"
}
export declare class ListFlywheelIterationHistoryRequest extends SpeakeasyBase {
    listFlywheelIterationHistoryRequest: shared.ListFlywheelIterationHistoryRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFlywheelIterationHistoryXAmzTargetEnum;
}
export declare class ListFlywheelIterationHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidFilterException
     */
    invalidFilterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listFlywheelIterationHistoryResponse?: shared.ListFlywheelIterationHistoryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
