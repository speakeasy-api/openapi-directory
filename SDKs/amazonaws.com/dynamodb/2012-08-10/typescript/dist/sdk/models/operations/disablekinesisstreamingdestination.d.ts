import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableKinesisStreamingDestinationXAmzTargetEnum {
    DynamoDB20120810DisableKinesisStreamingDestination = "DynamoDB_20120810.DisableKinesisStreamingDestination"
}
export declare class DisableKinesisStreamingDestinationRequest extends SpeakeasyBase {
    kinesisStreamingDestinationInput: shared.KinesisStreamingDestinationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableKinesisStreamingDestinationXAmzTargetEnum;
}
export declare class DisableKinesisStreamingDestinationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    kinesisStreamingDestinationOutput?: shared.KinesisStreamingDestinationOutput;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
