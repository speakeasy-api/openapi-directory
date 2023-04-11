import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFilterXAmzTargetEnum {
    AmazonPersonalizeDescribeFilter = "AmazonPersonalize.DescribeFilter"
}
export declare class DescribeFilterRequest extends SpeakeasyBase {
    describeFilterRequest: shared.DescribeFilterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFilterXAmzTargetEnum;
}
export declare class DescribeFilterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFilterResponse?: shared.DescribeFilterResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
