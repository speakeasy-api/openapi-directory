import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScorePrivacyEnum } from "./scoreprivacyenum";
import { ScoreSource } from "./scoresource";


export enum ScoreCreationDataEncodingEnum {
    Base64 = "base64"
}


// ScoreCreation
/** 
 * A new created score
**/
export class ScoreCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=dataEncoding" })
  dataEncoding?: ScoreCreationDataEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=googleDriveFolder" })
  googleDriveFolder?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy: ScorePrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ScoreSource;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
