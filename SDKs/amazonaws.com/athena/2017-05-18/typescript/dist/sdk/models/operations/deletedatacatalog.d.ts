import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDataCatalogXAmzTargetEnum {
    AmazonAthenaDeleteDataCatalog = "AmazonAthena.DeleteDataCatalog"
}
export declare class DeleteDataCatalogRequest extends SpeakeasyBase {
    deleteDataCatalogInput: shared.DeleteDataCatalogInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDataCatalogXAmzTargetEnum;
}
export declare class DeleteDataCatalogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDataCatalogOutput?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
