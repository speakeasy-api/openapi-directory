import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetNamespaceXAmzTargetEnum {
    Route53AutoNamingV20170314GetNamespace = "Route53AutoNaming_v20170314.GetNamespace"
}
export declare class GetNamespaceRequest extends SpeakeasyBase {
    getNamespaceRequest: shared.GetNamespaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNamespaceXAmzTargetEnum;
}
export declare class GetNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getNamespaceResponse?: shared.GetNamespaceResponse;
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
}
