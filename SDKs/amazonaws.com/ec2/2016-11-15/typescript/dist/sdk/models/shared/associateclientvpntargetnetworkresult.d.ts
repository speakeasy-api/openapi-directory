import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the target network association.
**/
export declare class AssociateClientVpnTargetNetworkResultStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
export declare class AssociateClientVpnTargetNetworkResult extends SpeakeasyBase {
    associationId?: Record<string, any>;
    status?: AssociateClientVpnTargetNetworkResultStatus;
}
