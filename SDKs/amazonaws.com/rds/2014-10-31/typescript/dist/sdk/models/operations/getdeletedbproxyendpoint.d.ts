import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDBProxyEndpointActionEnum {
    DeleteDBProxyEndpoint = "DeleteDBProxyEndpoint"
}
export declare enum GETDeleteDBProxyEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDeleteDBProxyEndpointRequest extends SpeakeasyBase {
    action: GETDeleteDBProxyEndpointActionEnum;
    /**
     * The name of the DB proxy endpoint to delete.
     */
    dbProxyEndpointName: string;
    version: GETDeleteDBProxyEndpointVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDBProxyEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
