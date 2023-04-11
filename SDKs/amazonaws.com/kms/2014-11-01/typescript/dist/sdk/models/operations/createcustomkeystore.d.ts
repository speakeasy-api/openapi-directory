import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCustomKeyStoreXAmzTargetEnum {
    TrentServiceCreateCustomKeyStore = "TrentService.CreateCustomKeyStore"
}
export declare class CreateCustomKeyStoreRequest extends SpeakeasyBase {
    createCustomKeyStoreRequest: shared.CreateCustomKeyStoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomKeyStoreXAmzTargetEnum;
}
export declare class CreateCustomKeyStoreResponse extends SpeakeasyBase {
    /**
     * CloudHsmClusterInUseException
     */
    cloudHsmClusterInUseException?: any;
    /**
     * CloudHsmClusterInvalidConfigurationException
     */
    cloudHsmClusterInvalidConfigurationException?: any;
    /**
     * CloudHsmClusterNotActiveException
     */
    cloudHsmClusterNotActiveException?: any;
    /**
     * CloudHsmClusterNotFoundException
     */
    cloudHsmClusterNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    createCustomKeyStoreResponse?: shared.CreateCustomKeyStoreResponse;
    /**
     * CustomKeyStoreNameInUseException
     */
    customKeyStoreNameInUseException?: any;
    /**
     * IncorrectTrustAnchorException
     */
    incorrectTrustAnchorException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * XksProxyIncorrectAuthenticationCredentialException
     */
    xksProxyIncorrectAuthenticationCredentialException?: any;
    /**
     * XksProxyInvalidConfigurationException
     */
    xksProxyInvalidConfigurationException?: any;
    /**
     * XksProxyInvalidResponseException
     */
    xksProxyInvalidResponseException?: any;
    /**
     * XksProxyUriEndpointInUseException
     */
    xksProxyUriEndpointInUseException?: any;
    /**
     * XksProxyUriInUseException
     */
    xksProxyUriInUseException?: any;
    /**
     * XksProxyUriUnreachableException
     */
    xksProxyUriUnreachableException?: any;
    /**
     * XksProxyVpcEndpointServiceInUseException
     */
    xksProxyVpcEndpointServiceInUseException?: any;
    /**
     * XksProxyVpcEndpointServiceInvalidConfigurationException
     */
    xksProxyVpcEndpointServiceInvalidConfigurationException?: any;
    /**
     * XksProxyVpcEndpointServiceNotFoundException
     */
    xksProxyVpcEndpointServiceNotFoundException?: any;
}
