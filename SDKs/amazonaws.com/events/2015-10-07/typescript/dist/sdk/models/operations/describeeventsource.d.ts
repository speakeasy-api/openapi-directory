import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEventSourceXAmzTargetEnum {
    AWSEventsDescribeEventSource = "AWSEvents.DescribeEventSource"
}
export declare class DescribeEventSourceRequest extends SpeakeasyBase {
    describeEventSourceRequest: shared.DescribeEventSourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventSourceXAmzTargetEnum;
}
export declare class DescribeEventSourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEventSourceResponse?: shared.DescribeEventSourceResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * OperationDisabledException
     */
    operationDisabledException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
