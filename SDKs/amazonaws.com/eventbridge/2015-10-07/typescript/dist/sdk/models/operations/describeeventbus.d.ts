import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEventBusXAmzTargetEnum {
    AWSEventsDescribeEventBus = "AWSEvents.DescribeEventBus"
}
export declare class DescribeEventBusRequest extends SpeakeasyBase {
    describeEventBusRequest: shared.DescribeEventBusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventBusXAmzTargetEnum;
}
export declare class DescribeEventBusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEventBusResponse?: shared.DescribeEventBusResponse;
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
