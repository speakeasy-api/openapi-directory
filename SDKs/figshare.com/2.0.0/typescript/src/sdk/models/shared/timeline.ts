import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Timeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstOnline" })
  firstOnline?: string;

  @SpeakeasyMetadata({ data: "json, name=posted" })
  posted?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherAcceptance" })
  publisherAcceptance?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherPublication" })
  publisherPublication?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=submission" })
  submission?: string;
}
