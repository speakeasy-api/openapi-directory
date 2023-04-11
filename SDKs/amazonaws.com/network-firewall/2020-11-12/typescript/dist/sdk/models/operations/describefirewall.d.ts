import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFirewallXAmzTargetEnum {
    NetworkFirewall20201112DescribeFirewall = "NetworkFirewall_20201112.DescribeFirewall"
}
export declare class DescribeFirewallRequest extends SpeakeasyBase {
    describeFirewallRequest: shared.DescribeFirewallRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFirewallXAmzTargetEnum;
}
export declare class DescribeFirewallResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFirewallResponse?: shared.DescribeFirewallResponse;
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
