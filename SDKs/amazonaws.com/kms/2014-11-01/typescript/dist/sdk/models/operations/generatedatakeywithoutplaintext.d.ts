import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GenerateDataKeyWithoutPlaintextXAmzTargetEnum {
    TrentServiceGenerateDataKeyWithoutPlaintext = "TrentService.GenerateDataKeyWithoutPlaintext"
}
export declare class GenerateDataKeyWithoutPlaintextRequest extends SpeakeasyBase {
    generateDataKeyWithoutPlaintextRequest: shared.GenerateDataKeyWithoutPlaintextRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateDataKeyWithoutPlaintextXAmzTargetEnum;
}
export declare class GenerateDataKeyWithoutPlaintextResponse extends SpeakeasyBase {
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
    generateDataKeyWithoutPlaintextResponse?: shared.GenerateDataKeyWithoutPlaintextResponse;
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
