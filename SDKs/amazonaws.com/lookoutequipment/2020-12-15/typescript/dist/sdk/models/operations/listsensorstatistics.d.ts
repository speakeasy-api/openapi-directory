import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSensorStatisticsXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceListSensorStatistics = "AWSLookoutEquipmentFrontendService.ListSensorStatistics"
}
export declare class ListSensorStatisticsRequest extends SpeakeasyBase {
    listSensorStatisticsRequest: shared.ListSensorStatisticsRequest;
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
    xAmzTarget: ListSensorStatisticsXAmzTargetEnum;
}
export declare class ListSensorStatisticsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listSensorStatisticsResponse?: shared.ListSensorStatisticsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
