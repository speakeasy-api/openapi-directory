import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRuleGroupMetadataXAmzTargetEnum {
    NetworkFirewall20201112DescribeRuleGroupMetadata = "NetworkFirewall_20201112.DescribeRuleGroupMetadata"
}
export declare class DescribeRuleGroupMetadataRequest extends SpeakeasyBase {
    describeRuleGroupMetadataRequest: shared.DescribeRuleGroupMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRuleGroupMetadataXAmzTargetEnum;
}
export declare class DescribeRuleGroupMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRuleGroupMetadataResponse?: shared.DescribeRuleGroupMetadataResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
