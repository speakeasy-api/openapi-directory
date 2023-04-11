import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ConfirmTopicRuleDestinationRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The token used to confirm ownership or access to the topic rule confirmation URL.
     */
    confirmationToken: string;
}
export declare class ConfirmTopicRuleDestinationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    confirmTopicRuleDestinationResponse?: Record<string, any>;
    /**
     * ConflictingResourceUpdateException
     */
    conflictingResourceUpdateException?: any;
    contentType: string;
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
