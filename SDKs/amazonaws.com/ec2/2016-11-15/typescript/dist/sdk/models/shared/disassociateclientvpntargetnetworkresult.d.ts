import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the target network association.
**/
export declare class DisassociateClientVpnTargetNetworkResultStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
export declare class DisassociateClientVpnTargetNetworkResult extends SpeakeasyBase {
    associationId?: Record<string, any>;
    status?: DisassociateClientVpnTargetNetworkResultStatus;
}
