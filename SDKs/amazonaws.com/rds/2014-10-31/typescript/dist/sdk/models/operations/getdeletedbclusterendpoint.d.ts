import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDBClusterEndpointActionEnum {
    DeleteDBClusterEndpoint = "DeleteDBClusterEndpoint"
}
export declare enum GETDeleteDBClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDeleteDBClusterEndpointRequest extends SpeakeasyBase {
    action: GETDeleteDBClusterEndpointActionEnum;
    /**
     * The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.
     */
    dbClusterEndpointIdentifier: string;
    version: GETDeleteDBClusterEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDBClusterEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
