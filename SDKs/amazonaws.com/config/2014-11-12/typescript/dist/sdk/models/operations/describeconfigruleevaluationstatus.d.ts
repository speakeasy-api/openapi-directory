import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConfigRuleEvaluationStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigRuleEvaluationStatus = "StarlingDoveService.DescribeConfigRuleEvaluationStatus"
}
export declare class DescribeConfigRuleEvaluationStatusRequest extends SpeakeasyBase {
    describeConfigRuleEvaluationStatusRequest: shared.DescribeConfigRuleEvaluationStatusRequest;
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
    xAmzTarget: DescribeConfigRuleEvaluationStatusXAmzTargetEnum;
}
export declare class DescribeConfigRuleEvaluationStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConfigRuleEvaluationStatusResponse?: shared.DescribeConfigRuleEvaluationStatusResponse;
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
