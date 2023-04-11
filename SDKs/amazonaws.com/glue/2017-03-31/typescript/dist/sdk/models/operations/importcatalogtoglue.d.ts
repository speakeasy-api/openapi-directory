import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportCatalogToGlueXAmzTargetEnum {
    AWSGlueImportCatalogToGlue = "AWSGlue.ImportCatalogToGlue"
}
export declare class ImportCatalogToGlueRequest extends SpeakeasyBase {
    importCatalogToGlueRequest: shared.ImportCatalogToGlueRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportCatalogToGlueXAmzTargetEnum;
}
export declare class ImportCatalogToGlueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    importCatalogToGlueResponse?: Record<string, any>;
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
