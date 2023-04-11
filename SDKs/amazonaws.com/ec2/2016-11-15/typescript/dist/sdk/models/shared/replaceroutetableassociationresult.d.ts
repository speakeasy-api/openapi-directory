import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the association.
 */
export declare enum ReplaceRouteTableAssociationResultAssociationStateStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated",
    Failed = "failed"
}
/**
 * The state of the association.
 */
export declare class ReplaceRouteTableAssociationResultAssociationState extends SpeakeasyBase {
    state?: ReplaceRouteTableAssociationResultAssociationStateStateEnum;
    statusMessage?: string;
}
/**
 * Success
 */
export declare class ReplaceRouteTableAssociationResult extends SpeakeasyBase {
    associationState?: ReplaceRouteTableAssociationResultAssociationState;
    newAssociationId?: string;
}
