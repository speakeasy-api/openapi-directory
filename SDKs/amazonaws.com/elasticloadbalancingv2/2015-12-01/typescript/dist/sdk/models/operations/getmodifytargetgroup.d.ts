import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyTargetGroupActionEnum {
    ModifyTargetGroup = "ModifyTargetGroup"
}
/**
 * The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. It is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.
 */
export declare enum GETModifyTargetGroupHealthCheckProtocolEnum {
    Http = "HTTP",
    Https = "HTTPS",
    Tcp = "TCP",
    Tls = "TLS",
    Udp = "UDP",
    TcpUdp = "TCP_UDP",
    Geneve = "GENEVE"
}
/**
 * The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
 */
export declare class GETModifyTargetGroupMatcher extends SpeakeasyBase {
    grpcCode?: string;
    httpCode?: string;
}
export declare enum GETModifyTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETModifyTargetGroupRequest extends SpeakeasyBase {
    action: GETModifyTargetGroupActionEnum;
    /**
     * Indicates whether health checks are enabled.
     */
    healthCheckEnabled?: boolean;
    /**
     * The approximate amount of time, in seconds, between health checks of an individual target.
     */
    healthCheckIntervalSeconds?: number;
    /**
     * <p>[HTTP/HTTPS health checks] The destination for health checks on the targets.</p> <p>[HTTP1 or HTTP2 protocol version] The ping path. The default is /.</p> <p>[GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /Amazon Web Services.ALB/healthcheck.</p>
     */
    healthCheckPath?: string;
    /**
     * The port the load balancer uses when performing health checks on targets.
     */
    healthCheckPort?: string;
    /**
     * The protocol the load balancer uses when performing health checks on targets. For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. It is supported for health checks only if the protocol of the target group is TCP, TLS, UDP, or TCP_UDP. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.
     */
    healthCheckProtocol?: GETModifyTargetGroupHealthCheckProtocolEnum;
    /**
     * [HTTP/HTTPS health checks] The amount of time, in seconds, during which no response means a failed health check.
     */
    healthCheckTimeoutSeconds?: number;
    /**
     * The number of consecutive health checks successes required before considering an unhealthy target healthy.
     */
    healthyThresholdCount?: number;
    /**
     * [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.
     */
    matcher?: GETModifyTargetGroupMatcher;
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    targetGroupArn: string;
    /**
     * The number of consecutive health check failures required before considering the target unhealthy.
     */
    unhealthyThresholdCount?: number;
    version: GETModifyTargetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
