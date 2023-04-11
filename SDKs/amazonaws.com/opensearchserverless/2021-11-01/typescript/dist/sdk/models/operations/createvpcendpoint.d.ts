import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateVpcEndpointXAmzTargetEnum {
    OpenSearchServerlessCreateVpcEndpoint = "OpenSearchServerless.CreateVpcEndpoint"
}
export declare class CreateVpcEndpointRequest extends SpeakeasyBase {
    createVpcEndpointRequest: shared.CreateVpcEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVpcEndpointXAmzTargetEnum;
}
export declare class CreateVpcEndpointResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createVpcEndpointResponse?: shared.CreateVpcEndpointResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
