import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCustomKeyStoreXAmzTargetEnum {
    TrentServiceUpdateCustomKeyStore = "TrentService.UpdateCustomKeyStore"
}
export declare class UpdateCustomKeyStoreRequest extends SpeakeasyBase {
    updateCustomKeyStoreRequest: shared.UpdateCustomKeyStoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCustomKeyStoreXAmzTargetEnum;
}
export declare class UpdateCustomKeyStoreResponse extends SpeakeasyBase {
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
    /**
     * CloudHsmClusterNotRelatedException
     */
    cloudHsmClusterNotRelatedException?: any;
    contentType: string;
    /**
     * CustomKeyStoreInvalidStateException
     */
    customKeyStoreInvalidStateException?: any;
    /**
     * CustomKeyStoreNameInUseException
     */
    customKeyStoreNameInUseException?: any;
    /**
     * CustomKeyStoreNotFoundException
     */
    customKeyStoreNotFoundException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCustomKeyStoreResponse?: Record<string, any>;
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
