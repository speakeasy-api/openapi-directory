import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventSourceRequest extends SpeakeasyBase {
    /**
     * The AWS Lambda assigned ID of the event source mapping.
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
export declare class GetEventSourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    eventSourceConfiguration?: shared.EventSourceConfiguration;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: shared.InvalidParameterValueException;
    /**
     * ServiceException
     */
    serviceException?: shared.ServiceException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
}
