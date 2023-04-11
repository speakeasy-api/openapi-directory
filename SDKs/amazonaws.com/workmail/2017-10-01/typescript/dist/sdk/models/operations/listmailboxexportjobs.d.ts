import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMailboxExportJobsXAmzTargetEnum {
    WorkMailServiceListMailboxExportJobs = "WorkMailService.ListMailboxExportJobs"
}
export declare class ListMailboxExportJobsRequest extends SpeakeasyBase {
    listMailboxExportJobsRequest: shared.ListMailboxExportJobsRequest;
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
    xAmzTarget: ListMailboxExportJobsXAmzTargetEnum;
}
export declare class ListMailboxExportJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listMailboxExportJobsResponse?: shared.ListMailboxExportJobsResponse;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
