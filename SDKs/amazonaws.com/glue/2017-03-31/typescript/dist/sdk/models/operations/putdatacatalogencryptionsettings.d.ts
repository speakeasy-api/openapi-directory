import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutDataCatalogEncryptionSettingsXAmzTargetEnum {
    AWSGluePutDataCatalogEncryptionSettings = "AWSGlue.PutDataCatalogEncryptionSettings"
}
export declare class PutDataCatalogEncryptionSettingsRequest extends SpeakeasyBase {
    putDataCatalogEncryptionSettingsRequest: shared.PutDataCatalogEncryptionSettingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutDataCatalogEncryptionSettingsXAmzTargetEnum;
}
export declare class PutDataCatalogEncryptionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * Success
     */
    putDataCatalogEncryptionSettingsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
