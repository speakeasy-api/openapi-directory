import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTestGridSessionsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridSessions = "DeviceFarm_20150623.ListTestGridSessions"
}
export declare class ListTestGridSessionsRequest extends SpeakeasyBase {
    listTestGridSessionsRequest: shared.ListTestGridSessionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTestGridSessionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResult?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListTestGridSessionsResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * Success
     */
    listTestGridSessionsResult?: shared.ListTestGridSessionsResult;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
