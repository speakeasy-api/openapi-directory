import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTaskExecutionsXAmzTargetEnum {
    FmrsServiceListTaskExecutions = "FmrsService.ListTaskExecutions"
}
export declare class ListTaskExecutionsRequest extends SpeakeasyBase {
    listTaskExecutionsRequest: shared.ListTaskExecutionsRequest;
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
    xAmzTarget: ListTaskExecutionsXAmzTargetEnum;
}
export declare class ListTaskExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listTaskExecutionsResponse?: shared.ListTaskExecutionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
