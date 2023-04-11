import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverEndpointTypeEnum } from "./resolverendpointtypeenum";
import { UpdateIpAddress } from "./updateipaddress";
export declare class UpdateResolverEndpointRequest extends SpeakeasyBase {
    name?: string;
    resolverEndpointId: string;
    resolverEndpointType?: ResolverEndpointTypeEnum;
    updateIpAddresses?: UpdateIpAddress[];
}
