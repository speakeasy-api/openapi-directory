import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateHttpNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314UpdateHttpNamespace = "Route53AutoNaming_v20170314.UpdateHttpNamespace"
}
export declare class UpdateHttpNamespaceRequest extends SpeakeasyBase {
    updateHttpNamespaceRequest: shared.UpdateHttpNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateHttpNamespaceXAmzTargetEnum;
}
export declare class UpdateHttpNamespaceResponse extends SpeakeasyBase {
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
    updateHttpNamespaceResponse?: shared.UpdateHttpNamespaceResponse;
}
