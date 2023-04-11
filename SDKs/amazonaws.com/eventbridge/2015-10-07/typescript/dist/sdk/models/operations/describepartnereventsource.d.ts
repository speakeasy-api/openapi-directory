import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePartnerEventSourceXAmzTargetEnum {
    AWSEventsDescribePartnerEventSource = "AWSEvents.DescribePartnerEventSource"
}
export declare class DescribePartnerEventSourceRequest extends SpeakeasyBase {
    describePartnerEventSourceRequest: shared.DescribePartnerEventSourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePartnerEventSourceXAmzTargetEnum;
}
export declare class DescribePartnerEventSourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePartnerEventSourceResponse?: shared.DescribePartnerEventSourceResponse;
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
