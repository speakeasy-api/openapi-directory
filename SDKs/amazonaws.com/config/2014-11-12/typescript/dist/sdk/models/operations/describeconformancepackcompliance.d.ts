import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConformancePackComplianceXAmzTargetEnum {
    StarlingDoveServiceDescribeConformancePackCompliance = "StarlingDoveService.DescribeConformancePackCompliance"
}
export declare class DescribeConformancePackComplianceRequest extends SpeakeasyBase {
    describeConformancePackComplianceRequest: shared.DescribeConformancePackComplianceRequest;
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
    xAmzTarget: DescribeConformancePackComplianceXAmzTargetEnum;
}
export declare class DescribeConformancePackComplianceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConformancePackComplianceResponse?: shared.DescribeConformancePackComplianceResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchConfigRuleInConformancePackException
     */
    noSuchConfigRuleInConformancePackException?: any;
    /**
     * NoSuchConformancePackException
     */
    noSuchConformancePackException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
