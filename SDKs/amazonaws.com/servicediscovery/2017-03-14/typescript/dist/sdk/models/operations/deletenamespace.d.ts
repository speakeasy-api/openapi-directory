import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314DeleteNamespace = "Route53AutoNaming_v20170314.DeleteNamespace"
}
export declare class DeleteNamespaceRequest extends SpeakeasyBase {
    deleteNamespaceRequest: shared.DeleteNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNamespaceXAmzTargetEnum;
}
export declare class DeleteNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteNamespaceResponse?: shared.DeleteNamespaceResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
}
