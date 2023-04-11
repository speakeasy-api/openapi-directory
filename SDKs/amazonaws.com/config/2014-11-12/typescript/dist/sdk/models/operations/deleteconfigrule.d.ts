import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteConfigRuleXAmzTargetEnum {
    StarlingDoveServiceDeleteConfigRule = "StarlingDoveService.DeleteConfigRule"
}
export declare class DeleteConfigRuleRequest extends SpeakeasyBase {
    deleteConfigRuleRequest: shared.DeleteConfigRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConfigRuleXAmzTargetEnum;
}
export declare class DeleteConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * NoSuchConfigRuleException
     */
    noSuchConfigRuleException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
