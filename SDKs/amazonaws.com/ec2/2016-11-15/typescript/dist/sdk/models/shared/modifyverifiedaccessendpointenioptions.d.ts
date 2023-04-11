import { SpeakeasyBase } from "../../../internal/utils";
import { VerifiedAccessEndpointProtocolEnum } from "./verifiedaccessendpointprotocolenum";
/**
 * Options for a network-interface type Verified Access endpoint.
 */
export declare class ModifyVerifiedAccessEndpointEniOptions extends SpeakeasyBase {
    port?: number;
    protocol?: VerifiedAccessEndpointProtocolEnum;
}
