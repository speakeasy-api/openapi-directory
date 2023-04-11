import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeManagedEndpointRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * This output displays ID of the managed endpoint.
     */
    endpointId: string;
    /**
     * The ID of the endpoint's virtual cluster.
     */
    virtualClusterId: string;
}
export declare class DescribeManagedEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeManagedEndpointResponse?: shared.DescribeManagedEndpointResponse;
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
