import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStacksXAmzTargetEnum {
    OpsWorks20130218DescribeStacks = "OpsWorks_20130218.DescribeStacks"
}
export declare class DescribeStacksRequest extends SpeakeasyBase {
    describeStacksRequest: shared.DescribeStacksRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStacksXAmzTargetEnum;
}
export declare class DescribeStacksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStacksResult?: shared.DescribeStacksResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
