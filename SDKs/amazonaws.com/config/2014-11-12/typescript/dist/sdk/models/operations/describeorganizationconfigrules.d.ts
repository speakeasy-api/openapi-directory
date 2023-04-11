import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeOrganizationConfigRulesXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConfigRules = "StarlingDoveService.DescribeOrganizationConfigRules"
}
export declare class DescribeOrganizationConfigRulesRequest extends SpeakeasyBase {
    describeOrganizationConfigRulesRequest: shared.DescribeOrganizationConfigRulesRequest;
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
    xAmzTarget: DescribeOrganizationConfigRulesXAmzTargetEnum;
}
export declare class DescribeOrganizationConfigRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeOrganizationConfigRulesResponse?: shared.DescribeOrganizationConfigRulesResponse;
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
