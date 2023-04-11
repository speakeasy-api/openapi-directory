import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateServiceXAmzTargetEnum {
    Route53AutoNamingV20170314CreateService = "Route53AutoNaming_v20170314.CreateService"
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    createServiceRequest: shared.CreateServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServiceXAmzTargetEnum;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createServiceResponse?: shared.CreateServiceResponse;
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
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * ServiceAlreadyExists
     */
    serviceAlreadyExists?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
