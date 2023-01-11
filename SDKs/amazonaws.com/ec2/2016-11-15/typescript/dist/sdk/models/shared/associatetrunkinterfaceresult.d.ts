import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the association between the trunk network interface and branch network interface.
**/
export declare class AssociateTrunkInterfaceResultInterfaceAssociation extends SpeakeasyBase {
    associationId?: Record<string, any>;
    branchInterfaceId?: Record<string, any>;
    greKey?: Record<string, any>;
    interfaceProtocol?: Record<string, any>;
    tags?: Record<string, any>;
    trunkInterfaceId?: Record<string, any>;
    vlanId?: Record<string, any>;
}
export declare class AssociateTrunkInterfaceResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    interfaceAssociation?: AssociateTrunkInterfaceResultInterfaceAssociation;
}
