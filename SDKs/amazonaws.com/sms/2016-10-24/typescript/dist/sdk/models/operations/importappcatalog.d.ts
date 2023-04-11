import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportAppCatalogXAmzTargetEnum {
    AWSServerMigrationServiceV20161024ImportAppCatalog = "AWSServerMigrationService_V2016_10_24.ImportAppCatalog"
}
export declare class ImportAppCatalogRequest extends SpeakeasyBase {
    importAppCatalogRequest: shared.ImportAppCatalogRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportAppCatalogXAmzTargetEnum;
}
export declare class ImportAppCatalogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    importAppCatalogResponse?: Record<string, any>;
    /**
     * InternalError
     */
    internalError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
