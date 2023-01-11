import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScannedClinicalDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=metatags" })
  metatags?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
