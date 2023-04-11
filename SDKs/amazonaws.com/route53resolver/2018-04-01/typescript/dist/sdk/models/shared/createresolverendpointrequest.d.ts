import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressRequest } from "./ipaddressrequest";
import { ResolverEndpointDirectionEnum } from "./resolverendpointdirectionenum";
import { ResolverEndpointTypeEnum } from "./resolverendpointtypeenum";
import { Tag } from "./tag";
export declare class CreateResolverEndpointRequest extends SpeakeasyBase {
    creatorRequestId: string;
    direction: ResolverEndpointDirectionEnum;
    ipAddresses: IpAddressRequest[];
    name?: string;
    resolverEndpointType?: ResolverEndpointTypeEnum;
    securityGroupIds: string[];
    tags?: Tag[];
}
