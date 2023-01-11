import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";


export enum CreditAttributesCreditableTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}

export enum CreditAttributesTypeEnum {
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


export class CreditAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=creditable_id" })
  creditableId?: string;

  @SpeakeasyMetadata({ data: "json, name=creditable_type" })
  creditableType?: CreditAttributesCreditableTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreditAttributesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class CreditRelationshipsPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class CreditRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: CreditRelationshipsPerson;
}


// Credit
/** 
 * A credit links a specific person to a series, season, or episode in a specific role.
 * 
**/
export class Credit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: CreditAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: CreditRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
