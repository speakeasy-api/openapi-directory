import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>The chronological sorting order of the requested information.</p> <p>Default: <code>ASCENDING</code> </p>
 */
export declare enum GetAssetPropertyValueHistoryTimeOrderingEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class GetAssetPropertyValueHistoryRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the asset.
     */
    assetId?: string;
    /**
     * The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
     */
    endDate?: Date;
    /**
     * <p>The maximum number of results to return for each paginated request.</p> <p>Default: 100</p>
     */
    maxResults?: number;
    /**
     * The token to be used for the next set of paginated results.
     */
    nextToken?: string;
    /**
     * The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.
     */
    propertyAlias?: string;
    /**
     * The ID of the asset property.
     */
    propertyId?: string;
    /**
     * The quality by which to filter asset data.
     */
    qualities?: shared.QualityEnum[];
    /**
     * The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
     */
    startDate?: Date;
    /**
     * <p>The chronological sorting order of the requested information.</p> <p>Default: <code>ASCENDING</code> </p>
     */
    timeOrdering?: GetAssetPropertyValueHistoryTimeOrderingEnum;
}
export declare class GetAssetPropertyValueHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAssetPropertyValueHistoryResponse?: shared.GetAssetPropertyValueHistoryResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
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
