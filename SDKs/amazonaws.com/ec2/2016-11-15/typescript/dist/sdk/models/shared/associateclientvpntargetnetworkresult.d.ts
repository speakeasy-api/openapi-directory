import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the target network association.
 */
export declare enum AssociateClientVpnTargetNetworkResultStatusCodeEnum {
    Associating = "associating",
    Associated = "associated",
    AssociationFailed = "association-failed",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * The current state of the target network association.
 */
export declare class AssociateClientVpnTargetNetworkResultStatus extends SpeakeasyBase {
    code?: AssociateClientVpnTargetNetworkResultStatusCodeEnum;
    message?: string;
}
/**
 * Success
 */
export declare class AssociateClientVpnTargetNetworkResult extends SpeakeasyBase {
    associationId?: string;
    status?: AssociateClientVpnTargetNetworkResultStatus;
}
