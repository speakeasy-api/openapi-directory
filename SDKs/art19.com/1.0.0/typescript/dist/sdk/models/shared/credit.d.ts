import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
export declare enum CreditAttributesCreditableTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}
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
    creditableId?: string;
    creditableType?: CreditAttributesCreditableTypeEnum;
    position?: number;
    type?: CreditAttributesTypeEnum;
    updatedAt?: Date;
}
export declare class CreditRelationshipsPerson extends SpeakeasyBase {
    data?: ResourceIdentifier;
}
export declare class CreditRelationships extends SpeakeasyBase {
    person?: CreditRelationshipsPerson;
}
/**
 * A credit links a specific person to a series, season, or episode in a specific role.
 *
**/
export declare class Credit extends SpeakeasyBase {
    attributes?: CreditAttributes;
    id?: string;
    relationships?: CreditRelationships;
    type?: string;
}
