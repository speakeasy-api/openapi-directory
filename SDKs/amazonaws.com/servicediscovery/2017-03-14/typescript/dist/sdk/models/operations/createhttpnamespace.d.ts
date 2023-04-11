import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateHttpNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314CreateHttpNamespace = "Route53AutoNaming_v20170314.CreateHttpNamespace"
}
export declare class CreateHttpNamespaceRequest extends SpeakeasyBase {
    createHttpNamespaceRequest: shared.CreateHttpNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHttpNamespaceXAmzTargetEnum;
}
export declare class CreateHttpNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createHttpNamespaceResponse?: shared.CreateHttpNamespaceResponse;
    /**
     * DuplicateRequest
     */
    duplicateRequest?: any;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * NamespaceAlreadyExists
     */
    namespaceAlreadyExists?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
