import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The interface protocol. Valid values are <code>VLAN</code> and <code>GRE</code>.
 */
export declare enum AssociateTrunkInterfaceResultInterfaceAssociationInterfaceProtocolEnum {
    Vlan = "VLAN",
    Gre = "GRE"
}
/**
 * Describes a tag.
 */
export declare class AssociateTrunkInterfaceResultInterfaceAssociationTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the association between the trunk network interface and branch network interface.
 */
export declare class AssociateTrunkInterfaceResultInterfaceAssociation extends SpeakeasyBase {
    associationId?: string;
    branchInterfaceId?: string;
    greKey?: number;
    interfaceProtocol?: AssociateTrunkInterfaceResultInterfaceAssociationInterfaceProtocolEnum;
    tags?: AssociateTrunkInterfaceResultInterfaceAssociationTags[];
    trunkInterfaceId?: string;
    vlanId?: number;
}
/**
 * Success
 */
export declare class AssociateTrunkInterfaceResult extends SpeakeasyBase {
    clientToken?: string;
    interfaceAssociation?: AssociateTrunkInterfaceResultInterfaceAssociation;
}
