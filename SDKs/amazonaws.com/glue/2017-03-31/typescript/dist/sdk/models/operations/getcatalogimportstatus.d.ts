import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCatalogImportStatusXAmzTargetEnum {
    AWSGlueGetCatalogImportStatus = "AWSGlue.GetCatalogImportStatus"
}
export declare class GetCatalogImportStatusRequest extends SpeakeasyBase {
    getCatalogImportStatusRequest: shared.GetCatalogImportStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCatalogImportStatusXAmzTargetEnum;
}
export declare class GetCatalogImportStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCatalogImportStatusResponse?: shared.GetCatalogImportStatusResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
