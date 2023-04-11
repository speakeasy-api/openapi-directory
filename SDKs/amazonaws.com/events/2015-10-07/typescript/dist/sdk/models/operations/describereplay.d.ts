import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReplayXAmzTargetEnum {
    AWSEventsDescribeReplay = "AWSEvents.DescribeReplay"
}
export declare class DescribeReplayRequest extends SpeakeasyBase {
    describeReplayRequest: shared.DescribeReplayRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReplayXAmzTargetEnum;
}
export declare class DescribeReplayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReplayResponse?: shared.DescribeReplayResponse;
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
