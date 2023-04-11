import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A document specifying changes to a sampling rule's configuration.
 */
export declare class UpdateSamplingRuleRequestBodySamplingRuleUpdate extends SpeakeasyBase {
    attributes?: Record<string, string>;
    fixedRate?: number;
    httpMethod?: string;
    host?: string;
    priority?: number;
    reservoirSize?: number;
    resourceARN?: string;
    ruleARN?: string;
    ruleName?: string;
    serviceName?: string;
    serviceType?: string;
    urlPath?: string;
}
export declare class UpdateSamplingRuleRequestBody extends SpeakeasyBase {
    /**
     * A document specifying changes to a sampling rule's configuration.
     */
    samplingRuleUpdate: UpdateSamplingRuleRequestBodySamplingRuleUpdate;
}
export declare class UpdateSamplingRuleRequest extends SpeakeasyBase {
    requestBody: UpdateSamplingRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSamplingRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
    /**
     * Success
     */
    updateSamplingRuleResult?: shared.UpdateSamplingRuleResult;
}
