import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeOrganizationConfigRuleStatusesXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConfigRuleStatuses = "StarlingDoveService.DescribeOrganizationConfigRuleStatuses"
}
export declare class DescribeOrganizationConfigRuleStatusesRequest extends SpeakeasyBase {
    describeOrganizationConfigRuleStatusesRequest: shared.DescribeOrganizationConfigRuleStatusesRequest;
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
    xAmzTarget: DescribeOrganizationConfigRuleStatusesXAmzTargetEnum;
}
export declare class DescribeOrganizationConfigRuleStatusesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeOrganizationConfigRuleStatusesResponse?: shared.DescribeOrganizationConfigRuleStatusesResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * NoSuchOrganizationConfigRuleException
     */
    noSuchOrganizationConfigRuleException?: any;
    /**
     * OrganizationAccessDeniedException
     */
    organizationAccessDeniedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
