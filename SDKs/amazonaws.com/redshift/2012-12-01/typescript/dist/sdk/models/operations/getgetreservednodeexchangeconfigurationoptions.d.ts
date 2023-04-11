import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETReservedNodeExchangeConfigurationOptionsActionEnum {
    GetReservedNodeExchangeConfigurationOptions = "GetReservedNodeExchangeConfigurationOptions"
}
/**
 * The action type of the reserved-node configuration. The action type can be an exchange initiated from either a snapshot or a resize.
 */
export declare enum GETGETReservedNodeExchangeConfigurationOptionsActionTypeEnum {
    RestoreCluster = "restore-cluster",
    ResizeCluster = "resize-cluster"
}
export declare enum GETGETReservedNodeExchangeConfigurationOptionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETGETReservedNodeExchangeConfigurationOptionsRequest extends SpeakeasyBase {
    action: GETGETReservedNodeExchangeConfigurationOptionsActionEnum;
    /**
     * The action type of the reserved-node configuration. The action type can be an exchange initiated from either a snapshot or a resize.
     */
    actionType: GETGETReservedNodeExchangeConfigurationOptionsActionTypeEnum;
    /**
     * The identifier for the cluster that is the source for a reserved-node exchange.
     */
    clusterIdentifier?: string;
    /**
     * An optional pagination token provided by a previous <code>GetReservedNodeExchangeConfigurationOptions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the <code>MaxRecords</code> parameter. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request.
     */
    marker?: string;
    /**
     * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>Marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
     */
    maxRecords?: number;
    /**
     * The identifier for the snapshot that is the source for the reserved-node exchange.
     */
    snapshotIdentifier?: string;
    version: GETGETReservedNodeExchangeConfigurationOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETReservedNodeExchangeConfigurationOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
