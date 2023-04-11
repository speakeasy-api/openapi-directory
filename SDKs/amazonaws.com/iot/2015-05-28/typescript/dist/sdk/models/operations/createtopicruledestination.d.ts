import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configuration of the topic rule destination.
 */
export declare class CreateTopicRuleDestinationRequestBodyDestinationConfiguration extends SpeakeasyBase {
    httpUrlConfiguration?: shared.HttpUrlDestinationConfiguration;
    vpcConfiguration?: shared.VpcDestinationConfiguration;
}
export declare class CreateTopicRuleDestinationRequestBody extends SpeakeasyBase {
    /**
     * Configuration of the topic rule destination.
     */
    destinationConfiguration: CreateTopicRuleDestinationRequestBodyDestinationConfiguration;
}
export declare class CreateTopicRuleDestinationRequest extends SpeakeasyBase {
    requestBody: CreateTopicRuleDestinationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateTopicRuleDestinationResponse extends SpeakeasyBase {
    /**
     * ConflictingResourceUpdateException
     */
    conflictingResourceUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    createTopicRuleDestinationResponse?: shared.CreateTopicRuleDestinationResponse;
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
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
