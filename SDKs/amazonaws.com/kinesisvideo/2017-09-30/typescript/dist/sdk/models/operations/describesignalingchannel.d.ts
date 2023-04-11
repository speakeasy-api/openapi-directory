import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeSignalingChannelRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the signaling channel that you want to describe.
     */
    channelARN?: string;
    /**
     * The name of the signaling channel that you want to describe.
     */
    channelName?: string;
}
export declare class DescribeSignalingChannelRequest extends SpeakeasyBase {
    requestBody: DescribeSignalingChannelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSignalingChannelResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    describeSignalingChannelOutput?: shared.DescribeSignalingChannelOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
