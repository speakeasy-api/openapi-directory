import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDataCatalogXAmzTargetEnum {
    AmazonAthenaGetDataCatalog = "AmazonAthena.GetDataCatalog"
}
export declare class GetDataCatalogRequest extends SpeakeasyBase {
    getDataCatalogInput: shared.GetDataCatalogInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataCatalogXAmzTargetEnum;
}
export declare class GetDataCatalogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDataCatalogOutput?: shared.GetDataCatalogOutput;
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
