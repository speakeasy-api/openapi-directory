import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The interface protocol. Valid values are <code>VLAN</code> and <code>GRE</code>.
 */
export declare enum DescribeTrunkInterfaceAssociationsResultInterfaceAssociationsInterfaceProtocolEnum {
    Vlan = "VLAN",
    Gre = "GRE"
}
/**
 * Describes a tag.
 */
export declare class DescribeTrunkInterfaceAssociationsResultInterfaceAssociationsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * <note> <p>Currently available in <b>limited preview only</b>. If you are interested in using this feature, contact your account manager.</p> </note> <p>Information about an association between a branch network interface with a trunk network interface.</p>
 */
export declare class DescribeTrunkInterfaceAssociationsResultInterfaceAssociations extends SpeakeasyBase {
    associationId?: string;
    branchInterfaceId?: string;
    greKey?: number;
    interfaceProtocol?: DescribeTrunkInterfaceAssociationsResultInterfaceAssociationsInterfaceProtocolEnum;
    tags?: DescribeTrunkInterfaceAssociationsResultInterfaceAssociationsTags[];
    trunkInterfaceId?: string;
    vlanId?: number;
}
/**
 * Success
 */
export declare class DescribeTrunkInterfaceAssociationsResult extends SpeakeasyBase {
    interfaceAssociations?: DescribeTrunkInterfaceAssociationsResultInterfaceAssociations[];
    nextToken?: string;
}
