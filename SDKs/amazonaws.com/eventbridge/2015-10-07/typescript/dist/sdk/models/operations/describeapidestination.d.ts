import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeApiDestinationXAmzTargetEnum {
    AWSEventsDescribeApiDestination = "AWSEvents.DescribeApiDestination"
}
export declare class DescribeApiDestinationRequest extends SpeakeasyBase {
    describeApiDestinationRequest: shared.DescribeApiDestinationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApiDestinationXAmzTargetEnum;
}
export declare class DescribeApiDestinationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeApiDestinationResponse?: shared.DescribeApiDestinationResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
