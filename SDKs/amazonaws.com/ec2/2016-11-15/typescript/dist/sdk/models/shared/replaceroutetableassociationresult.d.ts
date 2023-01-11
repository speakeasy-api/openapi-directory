import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the association.
**/
export declare class ReplaceRouteTableAssociationResultAssociationState extends SpeakeasyBase {
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
}
export declare class ReplaceRouteTableAssociationResult extends SpeakeasyBase {
    associationState?: ReplaceRouteTableAssociationResultAssociationState;
    newAssociationId?: Record<string, any>;
}
