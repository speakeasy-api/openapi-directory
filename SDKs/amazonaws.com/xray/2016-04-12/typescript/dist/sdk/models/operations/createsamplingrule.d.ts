import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
 */
export declare class CreateSamplingRuleRequestBodySamplingRule extends SpeakeasyBase {
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
    version?: number;
}
export declare class CreateSamplingRuleRequestBody extends SpeakeasyBase {
    /**
     * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
     */
    samplingRule: CreateSamplingRuleRequestBodySamplingRule;
    /**
     * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use.</p> </li> </ul>
     */
    tags?: shared.Tag[];
}
export declare class CreateSamplingRuleRequest extends SpeakeasyBase {
    requestBody: CreateSamplingRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSamplingRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSamplingRuleResult?: shared.CreateSamplingRuleResult;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * RuleLimitExceededException
     */
    ruleLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
