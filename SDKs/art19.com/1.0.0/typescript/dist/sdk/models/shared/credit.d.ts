import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
/**
 * The type of credit the linked person has on the referenced entity
 */
export declare enum CreditAttributesTypeEnum {
    AnchorCredit = "AnchorCredit",
    AssociateProducerCredit = "AssociateProducerCredit",
    AuthorCredit = "AuthorCredit",
    CastCredit = "CastCredit",
    CoHostCredit = "CoHostCredit",
    ComposerCredit = "ComposerCredit",
    CreatorCredit = "CreatorCredit",
    Credit = "Credit",
    DirectorCredit = "DirectorCredit",
    EditorCredit = "EditorCredit",
    EngineerCredit = "EngineerCredit",
    ExecutiveProducerCredit = "ExecutiveProducerCredit",
    GuestCoHostCredit = "GuestCoHostCredit",
    GuestCredit = "GuestCredit",
    GuestHostCredit = "GuestHostCredit",
    HeadWriterCredit = "HeadWriterCredit",
    HostCredit = "HostCredit",
    ProducerCredit = "ProducerCredit",
    ReporterCredit = "ReporterCredit",
    SeniorProducerCredit = "SeniorProducerCredit",
    SidekickCredit = "SidekickCredit",
    VideoProducerCredit = "VideoProducerCredit",
    WriterCredit = "WriterCredit"
}
export declare class CreditAttributes extends SpeakeasyBase {
    createdAt?: Date;
    /**
     * The order of this credit within all credits of the referenced creditable entity
     */
    position?: number;
    /**
     * The type of credit the linked person has on the referenced entity
     */
    type?: CreditAttributesTypeEnum;
    updatedAt?: Date;
}
export declare class CreditRelationshipsCreditable extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class CreditRelationshipsPerson extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class CreditRelationships extends SpeakeasyBase {
    creditable?: CreditRelationshipsCreditable;
    person?: CreditRelationshipsPerson;
}
/**
 * A credit links a specific person to a series, season, or episode in a specific role.
 *
 * @remarks
 *
 */
export declare class Credit extends SpeakeasyBase {
    attributes?: CreditAttributes;
    id?: string;
    relationships?: CreditRelationships;
    /**
     * The type of resource. This is always `credits`
     */
    type?: string;
}
