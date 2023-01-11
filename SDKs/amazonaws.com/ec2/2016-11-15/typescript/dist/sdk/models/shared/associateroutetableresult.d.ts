import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the association.
**/
export declare class AssociateRouteTableResultAssociationState extends SpeakeasyBase {
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
}
export declare class AssociateRouteTableResult extends SpeakeasyBase {
    associationId?: Record<string, any>;
    associationState?: AssociateRouteTableResultAssociationState;
}
