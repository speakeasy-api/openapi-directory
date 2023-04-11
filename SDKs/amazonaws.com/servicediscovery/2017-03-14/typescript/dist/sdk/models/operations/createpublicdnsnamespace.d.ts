import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePublicDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314CreatePublicDnsNamespace = "Route53AutoNaming_v20170314.CreatePublicDnsNamespace"
}
export declare class CreatePublicDnsNamespaceRequest extends SpeakeasyBase {
    createPublicDnsNamespaceRequest: shared.CreatePublicDnsNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePublicDnsNamespaceXAmzTargetEnum;
}
export declare class CreatePublicDnsNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPublicDnsNamespaceResponse?: shared.CreatePublicDnsNamespaceResponse;
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
