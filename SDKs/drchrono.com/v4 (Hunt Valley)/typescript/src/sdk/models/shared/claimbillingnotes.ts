import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClaimBillingNotes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
