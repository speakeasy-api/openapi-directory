import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateKeyXAmzTargetEnum {
    TrentServiceCreateKey = "TrentService.CreateKey"
}
export declare class CreateKeyRequest extends SpeakeasyBase {
    createKeyRequest: shared.CreateKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateKeyXAmzTargetEnum;
}
export declare class CreateKeyResponse extends SpeakeasyBase {
    /**
     * CloudHsmClusterInvalidConfigurationException
     */
    cloudHsmClusterInvalidConfigurationException?: any;
    contentType: string;
    /**
     * Success
     */
    createKeyResponse?: shared.CreateKeyResponse;
    /**
     * CustomKeyStoreInvalidStateException
     */
    customKeyStoreInvalidStateException?: any;
    /**
     * CustomKeyStoreNotFoundException
     */
    customKeyStoreNotFoundException?: any;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * MalformedPolicyDocumentException
     */
    malformedPolicyDocumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagException
     */
    tagException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
    /**
     * XksKeyAlreadyInUseException
     */
    xksKeyAlreadyInUseException?: any;
    /**
     * XksKeyInvalidConfigurationException
     */
    xksKeyInvalidConfigurationException?: any;
    /**
     * XksKeyNotFoundException
     */
    xksKeyNotFoundException?: any;
}
