import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOrganizationCustomRulePolicyXAmzTargetEnum {
    StarlingDoveServiceGetOrganizationCustomRulePolicy = "StarlingDoveService.GetOrganizationCustomRulePolicy"
}
export declare class GetOrganizationCustomRulePolicyRequest extends SpeakeasyBase {
    getOrganizationCustomRulePolicyRequest: shared.GetOrganizationCustomRulePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOrganizationCustomRulePolicyXAmzTargetEnum;
}
export declare class GetOrganizationCustomRulePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOrganizationCustomRulePolicyResponse?: shared.GetOrganizationCustomRulePolicyResponse;
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
