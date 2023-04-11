import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDataCatalogXAmzTargetEnum {
    AmazonAthenaCreateDataCatalog = "AmazonAthena.CreateDataCatalog"
}
export declare class CreateDataCatalogRequest extends SpeakeasyBase {
    createDataCatalogInput: shared.CreateDataCatalogInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataCatalogXAmzTargetEnum;
}
export declare class CreateDataCatalogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDataCatalogOutput?: Record<string, any>;
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
