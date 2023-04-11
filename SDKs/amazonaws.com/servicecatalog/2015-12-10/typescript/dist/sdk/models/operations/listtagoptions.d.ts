import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagOptionsXAmzTargetEnum {
    Aws242ServiceCatalogServiceListTagOptions = "AWS242ServiceCatalogService.ListTagOptions"
}
export declare class ListTagOptionsRequest extends SpeakeasyBase {
    listTagOptionsInput: shared.ListTagOptionsInput;
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
    xAmzTarget: ListTagOptionsXAmzTargetEnum;
}
export declare class ListTagOptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listTagOptionsOutput?: shared.ListTagOptionsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagOptionNotMigratedException
     */
    tagOptionNotMigratedException?: any;
}
