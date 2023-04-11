import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutOrganizationConfigRuleXAmzTargetEnum {
    StarlingDoveServicePutOrganizationConfigRule = "StarlingDoveService.PutOrganizationConfigRule"
}
export declare class PutOrganizationConfigRuleRequest extends SpeakeasyBase {
    putOrganizationConfigRuleRequest: shared.PutOrganizationConfigRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutOrganizationConfigRuleXAmzTargetEnum;
}
export declare class PutOrganizationConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InsufficientPermissionsException
     */
    insufficientPermissionsException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * MaxNumberOfOrganizationConfigRulesExceededException
     */
    maxNumberOfOrganizationConfigRulesExceededException?: any;
    /**
     * NoAvailableOrganizationException
     */
    noAvailableOrganizationException?: any;
    /**
     * OrganizationAccessDeniedException
     */
    organizationAccessDeniedException?: any;
    /**
     * OrganizationAllFeaturesNotEnabledException
     */
    organizationAllFeaturesNotEnabledException?: any;
    /**
     * Success
     */
    putOrganizationConfigRuleResponse?: shared.PutOrganizationConfigRuleResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
