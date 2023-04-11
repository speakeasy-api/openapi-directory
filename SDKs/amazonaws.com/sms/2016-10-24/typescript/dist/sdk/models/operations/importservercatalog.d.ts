import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum ImportServerCatalogXAmzTargetEnum {
    AWSServerMigrationServiceV20161024ImportServerCatalog = "AWSServerMigrationService_V2016_10_24.ImportServerCatalog"
}
export declare class ImportServerCatalogRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportServerCatalogXAmzTargetEnum;
}
export declare class ImportServerCatalogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    importServerCatalogResponse?: Record<string, any>;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * NoConnectorsAvailableException
     */
    noConnectorsAvailableException?: any;
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
