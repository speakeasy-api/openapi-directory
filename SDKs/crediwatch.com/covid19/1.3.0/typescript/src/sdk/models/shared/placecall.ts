import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlaceCall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answered_by" })
  answeredBy?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=option_selected" })
  optionSelected?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=previously_verified_at" })
  previouslyVerifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
