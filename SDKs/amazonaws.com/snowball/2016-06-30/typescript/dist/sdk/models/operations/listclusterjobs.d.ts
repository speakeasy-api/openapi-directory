import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListClusterJobsXAmzTargetEnum {
    AWSIESnowballJobManagementServiceListClusterJobs = "AWSIESnowballJobManagementService.ListClusterJobs"
}
export declare class ListClusterJobsRequest extends SpeakeasyBase {
    listClusterJobsRequest: shared.ListClusterJobsRequest;
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
    xAmzTarget: ListClusterJobsXAmzTargetEnum;
}
export declare class ListClusterJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    /**
     * Success
     */
    listClusterJobsResult?: shared.ListClusterJobsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
