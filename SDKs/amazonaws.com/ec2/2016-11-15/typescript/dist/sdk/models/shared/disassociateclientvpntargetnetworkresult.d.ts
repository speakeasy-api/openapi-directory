import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the target network association.
 */
export declare enum DisassociateClientVpnTargetNetworkResultStatusCodeEnum {
    Associating = "associating",
    Associated = "associated",
    AssociationFailed = "association-failed",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * The current state of the target network association.
 */
export declare class DisassociateClientVpnTargetNetworkResultStatus extends SpeakeasyBase {
    code?: DisassociateClientVpnTargetNetworkResultStatusCodeEnum;
    message?: string;
}
/**
 * Success
 */
export declare class DisassociateClientVpnTargetNetworkResult extends SpeakeasyBase {
    associationId?: string;
    status?: DisassociateClientVpnTargetNetworkResultStatus;
}
