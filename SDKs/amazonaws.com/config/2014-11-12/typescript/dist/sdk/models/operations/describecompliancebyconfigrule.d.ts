import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeComplianceByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceDescribeComplianceByConfigRule = "StarlingDoveService.DescribeComplianceByConfigRule"
}
export declare class DescribeComplianceByConfigRuleRequest extends SpeakeasyBase {
    describeComplianceByConfigRuleRequest: shared.DescribeComplianceByConfigRuleRequest;
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
    xAmzTarget: DescribeComplianceByConfigRuleXAmzTargetEnum;
}
export declare class DescribeComplianceByConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeComplianceByConfigRuleResponse?: shared.DescribeComplianceByConfigRuleResponse;
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
