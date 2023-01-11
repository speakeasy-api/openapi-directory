import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImportServerCatalogXAmzTargetEnum {
    AwsServerMigrationServiceV20161024ImportServerCatalog = "AWSServerMigrationService_V2016_10_24.ImportServerCatalog"
}
export declare class ImportServerCatalogHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportServerCatalogXAmzTargetEnum;
}
export declare class ImportServerCatalogRequest extends SpeakeasyBase {
    headers: ImportServerCatalogHeaders;
    request: Record<string, any>;
}
export declare class ImportServerCatalogResponse extends SpeakeasyBase {
    contentType: string;
    importServerCatalogResponse?: Record<string, any>;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    noConnectorsAvailableException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
