import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableKinesisStreamingDestinationXAmzTargetEnum {
    DynamoDB20120810EnableKinesisStreamingDestination = "DynamoDB_20120810.EnableKinesisStreamingDestination"
}
export declare class EnableKinesisStreamingDestinationRequest extends SpeakeasyBase {
    kinesisStreamingDestinationInput: shared.KinesisStreamingDestinationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableKinesisStreamingDestinationXAmzTargetEnum;
}
export declare class EnableKinesisStreamingDestinationResponse extends SpeakeasyBase {
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
