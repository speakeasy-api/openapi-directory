import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDataCatalogXAmzTargetEnum {
    AmazonAthenaUpdateDataCatalog = "AmazonAthena.UpdateDataCatalog"
}
export declare class UpdateDataCatalogRequest extends SpeakeasyBase {
    updateDataCatalogInput: shared.UpdateDataCatalogInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDataCatalogXAmzTargetEnum;
}
export declare class UpdateDataCatalogResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    updateDataCatalogOutput?: Record<string, any>;
}
