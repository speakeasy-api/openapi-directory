import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutConfigRuleXAmzTargetEnum {
    StarlingDoveServicePutConfigRule = "StarlingDoveService.PutConfigRule"
}
export declare class PutConfigRuleRequest extends SpeakeasyBase {
    putConfigRuleRequest: shared.PutConfigRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutConfigRuleXAmzTargetEnum;
}
export declare class PutConfigRuleResponse extends SpeakeasyBase {
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
     * MaxNumberOfConfigRulesExceededException
     */
    maxNumberOfConfigRulesExceededException?: any;
    /**
     * NoAvailableConfigurationRecorderException
     */
    noAvailableConfigurationRecorderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
}
