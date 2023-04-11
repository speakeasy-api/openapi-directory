import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEndpointAccessXAmzTargetEnum {
    RedshiftServerlessCreateEndpointAccess = "RedshiftServerless.CreateEndpointAccess"
}
export declare class CreateEndpointAccessRequest extends SpeakeasyBase {
    createEndpointAccessRequest: shared.CreateEndpointAccessRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointAccessXAmzTargetEnum;
}
export declare class CreateEndpointAccessResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createEndpointAccessResponse?: shared.CreateEndpointAccessResponse;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
