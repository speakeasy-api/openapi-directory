import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the association.
 */
export declare enum AssociateRouteTableResultAssociationStateStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated",
    Failed = "failed"
}
/**
 * The state of the association.
 */
export declare class AssociateRouteTableResultAssociationState extends SpeakeasyBase {
    state?: AssociateRouteTableResultAssociationStateStateEnum;
    statusMessage?: string;
}
/**
 * Success
 */
export declare class AssociateRouteTableResult extends SpeakeasyBase {
    associationId?: string;
    associationState?: AssociateRouteTableResultAssociationState;
}
