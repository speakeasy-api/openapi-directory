import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportKeyMaterialXAmzTargetEnum {
    TrentServiceImportKeyMaterial = "TrentService.ImportKeyMaterial"
}
export declare class ImportKeyMaterialRequest extends SpeakeasyBase {
    importKeyMaterialRequest: shared.ImportKeyMaterialRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportKeyMaterialXAmzTargetEnum;
}
export declare class ImportKeyMaterialResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * ExpiredImportTokenException
     */
    expiredImportTokenException?: any;
    /**
     * Success
     */
    importKeyMaterialResponse?: Record<string, any>;
    /**
     * IncorrectKeyMaterialException
     */
    incorrectKeyMaterialException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidCiphertextException
     */
    invalidCiphertextException?: any;
    /**
     * InvalidImportTokenException
     */
    invalidImportTokenException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
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
