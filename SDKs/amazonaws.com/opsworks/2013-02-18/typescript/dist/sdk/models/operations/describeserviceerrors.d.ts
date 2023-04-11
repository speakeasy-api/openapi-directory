import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeServiceErrorsXAmzTargetEnum {
    OpsWorks20130218DescribeServiceErrors = "OpsWorks_20130218.DescribeServiceErrors"
}
export declare class DescribeServiceErrorsRequest extends SpeakeasyBase {
    describeServiceErrorsRequest: shared.DescribeServiceErrorsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeServiceErrorsXAmzTargetEnum;
}
export declare class DescribeServiceErrorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeServiceErrorsResult?: shared.DescribeServiceErrorsResult;
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
