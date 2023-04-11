import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDataCatalogsXAmzTargetEnum {
    AmazonAthenaListDataCatalogs = "AmazonAthena.ListDataCatalogs"
}
export declare class ListDataCatalogsRequest extends SpeakeasyBase {
    listDataCatalogsInput: shared.ListDataCatalogsInput;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDataCatalogsXAmzTargetEnum;
}
export declare class ListDataCatalogsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listDataCatalogsOutput?: shared.ListDataCatalogsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
