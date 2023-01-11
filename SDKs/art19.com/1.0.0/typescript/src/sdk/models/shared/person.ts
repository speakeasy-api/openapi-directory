import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";



export class PersonAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar_id" })
  avatarId?: string;

  @SpeakeasyMetadata({ data: "json, name=biography" })
  biography?: string;

  @SpeakeasyMetadata({ data: "json, name=born" })
  born?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=died" })
  died?: Date;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=from_country" })
  fromCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=from_locality" })
  fromLocality?: string;

  @SpeakeasyMetadata({ data: "json, name=from_region" })
  fromRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=public_email" })
  publicEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


// PersonRelationshipsAvatar
/** 
 * The avatar or head shot of the person. Details can be retrieved using the `/images` endpoint.
 * 
**/
export class PersonRelationshipsAvatar extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ResourceIdentifier;
}


export class PersonRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatar" })
  avatar?: PersonRelationshipsAvatar;
}


export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: PersonAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: PersonRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
