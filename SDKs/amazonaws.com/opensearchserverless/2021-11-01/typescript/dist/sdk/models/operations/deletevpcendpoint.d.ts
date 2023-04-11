import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteVpcEndpointXAmzTargetEnum {
    OpenSearchServerlessDeleteVpcEndpoint = "OpenSearchServerless.DeleteVpcEndpoint"
}
export declare class DeleteVpcEndpointRequest extends SpeakeasyBase {
    deleteVpcEndpointRequest: shared.DeleteVpcEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVpcEndpointXAmzTargetEnum;
}
export declare class DeleteVpcEndpointResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteVpcEndpointResponse?: shared.DeleteVpcEndpointResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
