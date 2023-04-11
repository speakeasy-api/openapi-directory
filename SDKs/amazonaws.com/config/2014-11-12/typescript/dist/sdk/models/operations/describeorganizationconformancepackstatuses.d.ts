import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeOrganizationConformancePackStatusesXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConformancePackStatuses = "StarlingDoveService.DescribeOrganizationConformancePackStatuses"
}
export declare class DescribeOrganizationConformancePackStatusesRequest extends SpeakeasyBase {
    describeOrganizationConformancePackStatusesRequest: shared.DescribeOrganizationConformancePackStatusesRequest;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: DescribeOrganizationConformancePackStatusesXAmzTargetEnum;
}
export declare class DescribeOrganizationConformancePackStatusesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeOrganizationConformancePackStatusesResponse?: shared.DescribeOrganizationConformancePackStatusesResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * NoSuchOrganizationConformancePackException
     */
    noSuchOrganizationConformancePackException?: any;
    /**
     * OrganizationAccessDeniedException
     */
    organizationAccessDeniedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
