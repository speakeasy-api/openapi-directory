import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum {
    StarlingDoveServiceGetOrganizationConfigRuleDetailedStatus = "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus"
}
export declare class GetOrganizationConfigRuleDetailedStatusRequest extends SpeakeasyBase {
    getOrganizationConfigRuleDetailedStatusRequest: shared.GetOrganizationConfigRuleDetailedStatusRequest;
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
    xAmzTarget: GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum;
}
export declare class GetOrganizationConfigRuleDetailedStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOrganizationConfigRuleDetailedStatusResponse?: shared.GetOrganizationConfigRuleDetailedStatusResponse;
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
