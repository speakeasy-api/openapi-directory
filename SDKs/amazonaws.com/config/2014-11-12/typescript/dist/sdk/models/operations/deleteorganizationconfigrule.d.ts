import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteOrganizationConfigRuleXAmzTargetEnum {
    StarlingDoveServiceDeleteOrganizationConfigRule = "StarlingDoveService.DeleteOrganizationConfigRule"
}
export declare class DeleteOrganizationConfigRuleRequest extends SpeakeasyBase {
    deleteOrganizationConfigRuleRequest: shared.DeleteOrganizationConfigRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOrganizationConfigRuleXAmzTargetEnum;
}
export declare class DeleteOrganizationConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * NoSuchOrganizationConfigRuleException
     */
    noSuchOrganizationConfigRuleException?: any;
    /**
     * OrganizationAccessDeniedException
     */
    organizationAccessDeniedException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
