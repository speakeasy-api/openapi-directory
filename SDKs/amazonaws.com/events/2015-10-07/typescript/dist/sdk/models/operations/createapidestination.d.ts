import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateApiDestinationXAmzTargetEnum {
    AWSEventsCreateApiDestination = "AWSEvents.CreateApiDestination"
}
export declare class CreateApiDestinationRequest extends SpeakeasyBase {
    createApiDestinationRequest: shared.CreateApiDestinationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApiDestinationXAmzTargetEnum;
}
export declare class CreateApiDestinationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createApiDestinationResponse?: shared.CreateApiDestinationResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
