import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeResourcePoliciesXAmzTargetEnum {
    Logs20140328DescribeResourcePolicies = "Logs_20140328.DescribeResourcePolicies"
}
export declare class DescribeResourcePoliciesRequest extends SpeakeasyBase {
    describeResourcePoliciesRequest: shared.DescribeResourcePoliciesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeResourcePoliciesXAmzTargetEnum;
}
export declare class DescribeResourcePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeResourcePoliciesResponse?: shared.DescribeResourcePoliciesResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
