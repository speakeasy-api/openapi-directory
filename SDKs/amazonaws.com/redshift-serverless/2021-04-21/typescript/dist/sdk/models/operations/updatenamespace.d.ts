import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateNamespaceXAmzTargetEnum {
    RedshiftServerlessUpdateNamespace = "RedshiftServerless.UpdateNamespace"
}
export declare class UpdateNamespaceRequest extends SpeakeasyBase {
    updateNamespaceRequest: shared.UpdateNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNamespaceXAmzTargetEnum;
}
export declare class UpdateNamespaceResponse extends SpeakeasyBase {
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
    updateNamespaceResponse?: shared.UpdateNamespaceResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
