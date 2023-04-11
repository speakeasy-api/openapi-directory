import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeOrganizationConformancePacksXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConformancePacks = "StarlingDoveService.DescribeOrganizationConformancePacks"
}
export declare class DescribeOrganizationConformancePacksRequest extends SpeakeasyBase {
    describeOrganizationConformancePacksRequest: shared.DescribeOrganizationConformancePacksRequest;
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
    xAmzTarget: DescribeOrganizationConformancePacksXAmzTargetEnum;
}
export declare class DescribeOrganizationConformancePacksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeOrganizationConformancePacksResponse?: shared.DescribeOrganizationConformancePacksResponse;
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
