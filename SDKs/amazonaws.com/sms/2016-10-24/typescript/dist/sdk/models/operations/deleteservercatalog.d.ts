import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DeleteServerCatalogXAmzTargetEnum {
    AWSServerMigrationServiceV20161024DeleteServerCatalog = "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog"
}
export declare class DeleteServerCatalogRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServerCatalogXAmzTargetEnum;
}
export declare class DeleteServerCatalogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteServerCatalogResponse?: Record<string, any>;
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
