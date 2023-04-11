import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEndpointAccessXAmzTargetEnum {
    RedshiftServerlessUpdateEndpointAccess = "RedshiftServerless.UpdateEndpointAccess"
}
export declare class UpdateEndpointAccessRequest extends SpeakeasyBase {
    updateEndpointAccessRequest: shared.UpdateEndpointAccessRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEndpointAccessXAmzTargetEnum;
}
export declare class UpdateEndpointAccessResponse extends SpeakeasyBase {
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
     * Success
     */
    updateEndpointAccessResponse?: shared.UpdateEndpointAccessResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
