import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeCacheEngineVersionsActionEnum {
    DescribeCacheEngineVersions = "DescribeCacheEngineVersions"
}
export declare enum GETDescribeCacheEngineVersionsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDescribeCacheEngineVersionsRequest extends SpeakeasyBase {
    action: GETDescribeCacheEngineVersionsActionEnum;
    /**
     * <p>The name of a specific cache parameter group family to return details for.</p> <p>Valid values are: <code>memcached1.4</code> | <code>memcached1.5</code> | <code>memcached1.6</code> | <code>redis2.6</code> | <code>redis2.8</code> | <code>redis3.2</code> | <code>redis4.0</code> | <code>redis5.0</code> | <code>redis6.x</code> | <code>redis6.2</code> | <code>redis7</code> </p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 alphanumeric characters</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
     */
    cacheParameterGroupFamily?: string;
    /**
     * If <code>true</code>, specifies that only the default version of the specified engine or engine and major version combination is to be returned.
     */
    defaultOnly?: boolean;
    /**
     * The cache engine to return. Valid values: <code>memcached</code> | <code>redis</code>
     */
    engine?: string;
    /**
     * <p>The cache engine version to return.</p> <p>Example: <code>1.4.14</code> </p>
     */
    engineVersion?: string;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
     */
    marker?: string;
    /**
     * <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
     */
    maxRecords?: number;
    version: GETDescribeCacheEngineVersionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeCacheEngineVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
