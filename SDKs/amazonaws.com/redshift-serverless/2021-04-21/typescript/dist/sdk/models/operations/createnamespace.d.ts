import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateNamespaceXAmzTargetEnum {
    RedshiftServerlessCreateNamespace = "RedshiftServerless.CreateNamespace"
}
export declare class CreateNamespaceRequest extends SpeakeasyBase {
    createNamespaceRequest: shared.CreateNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateNamespaceXAmzTargetEnum;
}
export declare class CreateNamespaceResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createNamespaceResponse?: shared.CreateNamespaceResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
