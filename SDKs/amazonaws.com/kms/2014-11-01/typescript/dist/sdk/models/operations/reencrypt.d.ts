import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ReEncryptXAmzTargetEnum {
    TrentServiceReEncrypt = "TrentService.ReEncrypt"
}
export declare class ReEncryptRequest extends SpeakeasyBase {
    reEncryptRequest: shared.ReEncryptRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReEncryptXAmzTargetEnum;
}
export declare class ReEncryptResponse extends SpeakeasyBase {
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
     * IncorrectKeyException
     */
    incorrectKeyException?: any;
    /**
     * InvalidCiphertextException
     */
    invalidCiphertextException?: any;
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
    /**
     * Success
     */
    reEncryptResponse?: shared.ReEncryptResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
