import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDataCatalogEncryptionSettingsXAmzTargetEnum {
    AWSGlueGetDataCatalogEncryptionSettings = "AWSGlue.GetDataCatalogEncryptionSettings"
}
export declare class GetDataCatalogEncryptionSettingsRequest extends SpeakeasyBase {
    getDataCatalogEncryptionSettingsRequest: shared.GetDataCatalogEncryptionSettingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataCatalogEncryptionSettingsXAmzTargetEnum;
}
export declare class GetDataCatalogEncryptionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDataCatalogEncryptionSettingsResponse?: shared.GetDataCatalogEncryptionSettingsResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
