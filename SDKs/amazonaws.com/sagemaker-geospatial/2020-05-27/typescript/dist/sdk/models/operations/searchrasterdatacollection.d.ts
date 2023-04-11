import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * This is a RasterDataCollectionQueryInput containing AreaOfInterest, Time Range filter and Property filters.
 */
export declare class SearchRasterDataCollectionRequestBodyRasterDataCollectionQuery extends SpeakeasyBase {
    areaOfInterest?: shared.AreaOfInterest;
    bandFilter?: string[];
    propertyFilters?: shared.PropertyFilters;
    timeRangeFilter?: shared.TimeRangeFilterInput;
}
export declare class SearchRasterDataCollectionRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the raster data collection.
     */
    arn: string;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    nextToken?: string;
    /**
     * This is a RasterDataCollectionQueryInput containing AreaOfInterest, Time Range filter and Property filters.
     */
    rasterDataCollectionQuery: SearchRasterDataCollectionRequestBodyRasterDataCollectionQuery;
}
export declare class SearchRasterDataCollectionRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: SearchRasterDataCollectionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchRasterDataCollectionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    searchRasterDataCollectionOutput?: shared.SearchRasterDataCollectionOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
