import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProtectionXAmzTargetEnum {
    AWSShield20160616DescribeProtection = "AWSShield_20160616.DescribeProtection"
}
export declare class DescribeProtectionRequest extends SpeakeasyBase {
    describeProtectionRequest: shared.DescribeProtectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProtectionXAmzTargetEnum;
}
export declare class DescribeProtectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProtectionResponse?: shared.DescribeProtectionResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
