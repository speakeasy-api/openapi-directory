import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEndpointRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The certificate ARN of the device. This is an optional parameter.
     */
    certificateArn?: string;
    /**
     * The thing ARN of the device. This is an optional parameter.
     */
    thingArn?: string;
}
export declare class GetEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getEndpointResponse?: shared.GetEndpointResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
