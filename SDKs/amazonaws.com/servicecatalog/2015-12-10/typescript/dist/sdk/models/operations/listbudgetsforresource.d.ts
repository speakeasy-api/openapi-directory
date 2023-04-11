import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBudgetsForResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceListBudgetsForResource = "AWS242ServiceCatalogService.ListBudgetsForResource"
}
export declare class ListBudgetsForResourceRequest extends SpeakeasyBase {
    listBudgetsForResourceInput: shared.ListBudgetsForResourceInput;
    /**
     * Pagination limit
     */
    pageSize?: string;
    /**
     * Pagination token
     */
    pageToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBudgetsForResourceXAmzTargetEnum;
}
export declare class ListBudgetsForResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listBudgetsForResourceOutput?: shared.ListBudgetsForResourceOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
