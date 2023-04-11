import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConnectionXAmzTargetEnum {
    AWSEventsDescribeConnection = "AWSEvents.DescribeConnection"
}
export declare class DescribeConnectionRequest extends SpeakeasyBase {
    describeConnectionRequest: shared.DescribeConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionXAmzTargetEnum;
}
export declare class DescribeConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConnectionResponse?: shared.DescribeConnectionResponse;
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
