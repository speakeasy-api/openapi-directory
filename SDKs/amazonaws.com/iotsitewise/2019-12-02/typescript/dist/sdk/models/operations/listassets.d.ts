import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>The filter for the requested list of assets. Choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all assets for a given asset model ID. The <code>assetModelId</code> parameter is required if you filter by <code>ALL</code>.</p> </li> <li> <p> <code>TOP_LEVEL</code> – The list includes only top-level assets in the asset hierarchy tree.</p> </li> </ul> <p>Default: <code>ALL</code> </p>
 */
export declare enum ListAssetsFilterEnum {
    All = "ALL",
    TopLevel = "TOP_LEVEL"
}
export declare class ListAssetsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the asset model by which to filter the list of assets. This parameter is required if you choose <code>ALL</code> for <code>filter</code>.
     */
    assetModelId?: string;
    /**
     * <p>The filter for the requested list of assets. Choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all assets for a given asset model ID. The <code>assetModelId</code> parameter is required if you filter by <code>ALL</code>.</p> </li> <li> <p> <code>TOP_LEVEL</code> – The list includes only top-level assets in the asset hierarchy tree.</p> </li> </ul> <p>Default: <code>ALL</code> </p>
     */
    filter?: ListAssetsFilterEnum;
    /**
     * <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
     */
    maxResults?: number;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: string;
}
export declare class ListAssetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listAssetsResponse?: shared.ListAssetsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
