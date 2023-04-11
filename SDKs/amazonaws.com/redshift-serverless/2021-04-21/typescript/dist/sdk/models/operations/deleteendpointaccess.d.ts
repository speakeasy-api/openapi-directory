import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEndpointAccessXAmzTargetEnum {
    RedshiftServerlessDeleteEndpointAccess = "RedshiftServerless.DeleteEndpointAccess"
}
export declare class DeleteEndpointAccessRequest extends SpeakeasyBase {
    deleteEndpointAccessRequest: shared.DeleteEndpointAccessRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEndpointAccessXAmzTargetEnum;
}
export declare class DeleteEndpointAccessResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteEndpointAccessResponse?: shared.DeleteEndpointAccessResponse;
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
