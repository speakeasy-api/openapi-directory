import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEndpointXAmzTargetEnum {
    AWSEventsCreateEndpoint = "AWSEvents.CreateEndpoint"
}
export declare class CreateEndpointRequest extends SpeakeasyBase {
    createEndpointRequest: shared.CreateEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointXAmzTargetEnum;
}
export declare class CreateEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createEndpointResponse?: shared.CreateEndpointResponse;
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
}
