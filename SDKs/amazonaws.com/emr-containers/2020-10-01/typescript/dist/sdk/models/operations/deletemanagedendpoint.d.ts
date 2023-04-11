import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteManagedEndpointRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the managed endpoint.
     */
    endpointId: string;
    /**
     * The ID of the endpoint's virtual cluster.
     */
    virtualClusterId: string;
}
export declare class DeleteManagedEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteManagedEndpointResponse?: shared.DeleteManagedEndpointResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
