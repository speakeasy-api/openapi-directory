import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPublicKeyXAmzTargetEnum {
    TrentServiceGetPublicKey = "TrentService.GetPublicKey"
}
export declare class GetPublicKeyRequest extends SpeakeasyBase {
    getPublicKeyRequest: shared.GetPublicKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPublicKeyXAmzTargetEnum;
}
export declare class GetPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * DisabledException
     */
    disabledException?: any;
    /**
     * Success
     */
    getPublicKeyResponse?: shared.GetPublicKeyResponse;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidGrantTokenException
     */
    invalidGrantTokenException?: any;
    /**
     * InvalidKeyUsageException
     */
    invalidKeyUsageException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * KeyUnavailableException
     */
    keyUnavailableException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
