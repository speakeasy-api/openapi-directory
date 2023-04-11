import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePrivateDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314CreatePrivateDnsNamespace = "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace"
}
export declare class CreatePrivateDnsNamespaceRequest extends SpeakeasyBase {
    createPrivateDnsNamespaceRequest: shared.CreatePrivateDnsNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePrivateDnsNamespaceXAmzTargetEnum;
}
export declare class CreatePrivateDnsNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPrivateDnsNamespaceResponse?: shared.CreatePrivateDnsNamespaceResponse;
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
