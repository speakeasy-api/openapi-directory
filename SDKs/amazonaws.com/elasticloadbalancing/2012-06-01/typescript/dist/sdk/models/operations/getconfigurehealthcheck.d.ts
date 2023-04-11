import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETConfigureHealthCheckActionEnum {
    ConfigureHealthCheck = "ConfigureHealthCheck"
}
/**
 * Information about a health check.
 */
export declare class GETConfigureHealthCheckHealthCheck extends SpeakeasyBase {
    healthyThreshold: number;
    interval: number;
    target: string;
    timeout: number;
    unhealthyThreshold: number;
}
export declare enum GETConfigureHealthCheckVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETConfigureHealthCheckRequest extends SpeakeasyBase {
    action: GETConfigureHealthCheckActionEnum;
    /**
     * The configuration information.
     */
    healthCheck: GETConfigureHealthCheckHealthCheck;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    version: GETConfigureHealthCheckVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETConfigureHealthCheckResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
