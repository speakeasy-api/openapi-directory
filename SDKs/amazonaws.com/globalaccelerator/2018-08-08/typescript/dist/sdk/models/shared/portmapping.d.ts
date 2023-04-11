import { SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingDestinationTrafficStateEnum } from "./customroutingdestinationtrafficstateenum";
import { CustomRoutingProtocolEnum } from "./customroutingprotocolenum";
import { SocketAddress } from "./socketaddress";
/**
 * Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets.
 */
export declare class PortMapping extends SpeakeasyBase {
    acceleratorPort?: number;
    destinationSocketAddress?: SocketAddress;
    destinationTrafficState?: CustomRoutingDestinationTrafficStateEnum;
    endpointGroupArn?: string;
    endpointId?: string;
    protocols?: CustomRoutingProtocolEnum[];
}
