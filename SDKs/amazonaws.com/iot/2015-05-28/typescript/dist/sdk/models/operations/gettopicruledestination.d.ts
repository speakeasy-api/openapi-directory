import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTopicRuleDestinationRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ARN of the topic rule destination.
     */
    arn: string;
}
export declare class GetTopicRuleDestinationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTopicRuleDestinationResponse?: shared.GetTopicRuleDestinationResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
