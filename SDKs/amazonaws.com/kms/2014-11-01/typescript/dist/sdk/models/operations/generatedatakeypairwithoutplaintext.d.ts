import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum {
    TrentServiceGenerateDataKeyPairWithoutPlaintext = "TrentService.GenerateDataKeyPairWithoutPlaintext"
}
export declare class GenerateDataKeyPairWithoutPlaintextRequest extends SpeakeasyBase {
    generateDataKeyPairWithoutPlaintextRequest: shared.GenerateDataKeyPairWithoutPlaintextRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateDataKeyPairWithoutPlaintextXAmzTargetEnum;
}
export declare class GenerateDataKeyPairWithoutPlaintextResponse extends SpeakeasyBase {
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
    generateDataKeyPairWithoutPlaintextResponse?: shared.GenerateDataKeyPairWithoutPlaintextResponse;
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
