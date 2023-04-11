import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverEndpointDirectionEnum } from "./resolverendpointdirectionenum";
import { ResolverEndpointStatusEnum } from "./resolverendpointstatusenum";
import { ResolverEndpointTypeEnum } from "./resolverendpointtypeenum";
/**
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, Updates the name, or ResolverEndpointType for an endpoint, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
 */
export declare class ResolverEndpoint extends SpeakeasyBase {
    arn?: string;
    creationTime?: string;
    creatorRequestId?: string;
    direction?: ResolverEndpointDirectionEnum;
    hostVPCId?: string;
    id?: string;
    ipAddressCount?: number;
    modificationTime?: string;
    name?: string;
    resolverEndpointType?: ResolverEndpointTypeEnum;
    securityGroupIds?: string[];
    status?: ResolverEndpointStatusEnum;
    statusMessage?: string;
}
