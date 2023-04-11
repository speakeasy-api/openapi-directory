import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GenerateDataKeyXAmzTargetEnum {
    TrentServiceGenerateDataKey = "TrentService.GenerateDataKey"
}
export declare class GenerateDataKeyRequest extends SpeakeasyBase {
    generateDataKeyRequest: shared.GenerateDataKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateDataKeyXAmzTargetEnum;
}
export declare class GenerateDataKeyResponse extends SpeakeasyBase {
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
    generateDataKeyResponse?: shared.GenerateDataKeyResponse;
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
