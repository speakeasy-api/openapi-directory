import { SpeakeasyBase } from "../../../internal/utils";
import { VerifiedAccessEndpointProtocolEnum } from "./verifiedaccessendpointprotocolenum";
/**
 * Options for a network interface-type endpoint.
 */
export declare class CreateVerifiedAccessEndpointEniOptions extends SpeakeasyBase {
    networkInterfaceId?: string;
    port?: number;
    protocol?: VerifiedAccessEndpointProtocolEnum;
}
