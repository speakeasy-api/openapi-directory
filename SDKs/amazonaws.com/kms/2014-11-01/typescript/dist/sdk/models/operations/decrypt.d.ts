import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DecryptXAmzTargetEnum {
    TrentServiceDecrypt = "TrentService.Decrypt"
}
export declare class DecryptRequest extends SpeakeasyBase {
    decryptRequest: shared.DecryptRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DecryptXAmzTargetEnum;
}
export declare class DecryptResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    decryptResponse?: shared.DecryptResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
