import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GenerateRandomXAmzTargetEnum {
    TrentServiceGenerateRandom = "TrentService.GenerateRandom"
}
export declare class GenerateRandomRequest extends SpeakeasyBase {
    generateRandomRequest: shared.GenerateRandomRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateRandomXAmzTargetEnum;
}
export declare class GenerateRandomResponse extends SpeakeasyBase {
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
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * Success
     */
    generateRandomResponse?: shared.GenerateRandomResponse;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
