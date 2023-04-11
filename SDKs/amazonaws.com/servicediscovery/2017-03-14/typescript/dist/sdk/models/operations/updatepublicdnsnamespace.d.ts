import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePublicDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdatePublicDnsNamespace = "Route53AutoNaming_v20170314.UpdatePublicDnsNamespace"
}
export declare class UpdatePublicDnsNamespaceRequest extends SpeakeasyBase {
    updatePublicDnsNamespaceRequest: shared.UpdatePublicDnsNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePublicDnsNamespaceXAmzTargetEnum;
}
export declare class UpdatePublicDnsNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DuplicateRequest
     */
    duplicateRequest?: any;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * NamespaceNotFound
     */
    namespaceNotFound?: any;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updatePublicDnsNamespaceResponse?: shared.UpdatePublicDnsNamespaceResponse;
}
