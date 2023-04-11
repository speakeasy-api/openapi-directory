import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateVpcEndpointXAmzTargetEnum {
    OpenSearchServerlessUpdateVpcEndpoint = "OpenSearchServerless.UpdateVpcEndpoint"
}
export declare class UpdateVpcEndpointRequest extends SpeakeasyBase {
    updateVpcEndpointRequest: shared.UpdateVpcEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVpcEndpointXAmzTargetEnum;
}
export declare class UpdateVpcEndpointResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateVpcEndpointResponse?: shared.UpdateVpcEndpointResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
