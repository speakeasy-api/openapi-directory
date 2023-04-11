import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ConnectCustomKeyStoreXAmzTargetEnum {
    TrentServiceConnectCustomKeyStore = "TrentService.ConnectCustomKeyStore"
}
export declare class ConnectCustomKeyStoreRequest extends SpeakeasyBase {
    connectCustomKeyStoreRequest: shared.ConnectCustomKeyStoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConnectCustomKeyStoreXAmzTargetEnum;
}
export declare class ConnectCustomKeyStoreResponse extends SpeakeasyBase {
    /**
     * CloudHsmClusterInvalidConfigurationException
     */
    cloudHsmClusterInvalidConfigurationException?: any;
    /**
     * CloudHsmClusterNotActiveException
     */
    cloudHsmClusterNotActiveException?: any;
    /**
     * Success
     */
    connectCustomKeyStoreResponse?: Record<string, any>;
    contentType: string;
    /**
     * CustomKeyStoreInvalidStateException
     */
    customKeyStoreInvalidStateException?: any;
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
}
