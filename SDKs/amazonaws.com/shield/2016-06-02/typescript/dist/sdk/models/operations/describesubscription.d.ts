import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSubscriptionXAmzTargetEnum {
    AWSShield20160616DescribeSubscription = "AWSShield_20160616.DescribeSubscription"
}
export declare class DescribeSubscriptionRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSubscriptionXAmzTargetEnum;
}
export declare class DescribeSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSubscriptionResponse?: shared.DescribeSubscriptionResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
