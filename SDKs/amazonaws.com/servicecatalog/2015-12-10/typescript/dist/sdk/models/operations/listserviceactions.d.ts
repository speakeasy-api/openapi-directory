import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServiceActionsXAmzTargetEnum {
    Aws242ServiceCatalogServiceListServiceActions = "AWS242ServiceCatalogService.ListServiceActions"
}
export declare class ListServiceActionsRequest extends SpeakeasyBase {
    listServiceActionsInput: shared.ListServiceActionsInput;
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
    xAmzTarget: ListServiceActionsXAmzTargetEnum;
}
export declare class ListServiceActionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listServiceActionsOutput?: shared.ListServiceActionsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
