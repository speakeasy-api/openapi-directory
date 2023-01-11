import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimelineUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstOnline" })
  firstOnline?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherAcceptance" })
  publisherAcceptance?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherPublication" })
  publisherPublication?: string;
}
