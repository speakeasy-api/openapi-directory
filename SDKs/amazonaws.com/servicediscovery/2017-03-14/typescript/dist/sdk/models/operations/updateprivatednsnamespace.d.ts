import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePrivateDnsNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdatePrivateDnsNamespace = "Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace"
}
export declare class UpdatePrivateDnsNamespaceRequest extends SpeakeasyBase {
    updatePrivateDnsNamespaceRequest: shared.UpdatePrivateDnsNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePrivateDnsNamespaceXAmzTargetEnum;
}
export declare class UpdatePrivateDnsNamespaceResponse extends SpeakeasyBase {
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
    updatePrivateDnsNamespaceResponse?: shared.UpdatePrivateDnsNamespaceResponse;
}
