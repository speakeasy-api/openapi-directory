import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAggregateComplianceByConfigRulesXAmzTargetEnum {
    StarlingDoveServiceDescribeAggregateComplianceByConfigRules = "StarlingDoveService.DescribeAggregateComplianceByConfigRules"
}
export declare class DescribeAggregateComplianceByConfigRulesRequest extends SpeakeasyBase {
    describeAggregateComplianceByConfigRulesRequest: shared.DescribeAggregateComplianceByConfigRulesRequest;
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
    xAmzTarget: DescribeAggregateComplianceByConfigRulesXAmzTargetEnum;
}
export declare class DescribeAggregateComplianceByConfigRulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAggregateComplianceByConfigRulesResponse?: shared.DescribeAggregateComplianceByConfigRulesResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * NoSuchConfigurationAggregatorException
     */
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
