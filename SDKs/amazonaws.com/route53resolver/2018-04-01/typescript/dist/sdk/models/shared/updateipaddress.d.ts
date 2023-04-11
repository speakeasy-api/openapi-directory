import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Provides information about the IP address type in response to <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a>.
 */
export declare class UpdateIpAddress extends SpeakeasyBase {
    ipId: string;
    ipv6: string;
}
