import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConfigRulesXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigRules = "StarlingDoveService.DescribeConfigRules"
}
export declare class DescribeConfigRulesRequest extends SpeakeasyBase {
    describeConfigRulesRequest: shared.DescribeConfigRulesRequest;
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
    xAmzTarget: DescribeConfigRulesXAmzTargetEnum;
}
export declare class DescribeConfigRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConfigRulesResponse?: shared.DescribeConfigRulesResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchConfigRuleException
     */
    noSuchConfigRuleException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
