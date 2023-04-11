import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTestGridProjectsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridProjects = "DeviceFarm_20150623.ListTestGridProjects"
}
export declare class ListTestGridProjectsRequest extends SpeakeasyBase {
    listTestGridProjectsRequest: shared.ListTestGridProjectsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTestGridProjectsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResult?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListTestGridProjectsResponse extends SpeakeasyBase {
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
    listTestGridProjectsResult?: shared.ListTestGridProjectsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
