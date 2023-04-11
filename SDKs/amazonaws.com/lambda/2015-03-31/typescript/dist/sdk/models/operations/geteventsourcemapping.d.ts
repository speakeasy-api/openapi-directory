import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventSourceMappingRequest extends SpeakeasyBase {
    /**
     * The identifier of the event source mapping.
     */
    uuid: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEventSourceMappingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    eventSourceMappingConfiguration?: shared.EventSourceMappingConfiguration;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
