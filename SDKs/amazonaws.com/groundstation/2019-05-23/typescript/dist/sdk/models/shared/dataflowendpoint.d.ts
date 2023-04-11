import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";
import { SocketAddress } from "./socketaddress";
/**
 * Information about a dataflow endpoint.
 */
export declare class DataflowEndpoint extends SpeakeasyBase {
    address?: SocketAddress;
    mtu?: number;
    name?: string;
    status?: EndpointStatusEnum;
}
