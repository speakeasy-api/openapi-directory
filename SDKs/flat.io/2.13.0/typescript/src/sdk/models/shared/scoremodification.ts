import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreCreationTypeEnum } from "./scorecreationtypeenum";
import { ScoreLicenseEnum } from "./scorelicenseenum";
import { ScorePrivacyEnum } from "./scoreprivacyenum";



// ScoreModification
/** 
 * Edit the score metadata
**/
export class ScoreModification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arranger" })
  arranger?: string;

  @SpeakeasyMetadata({ data: "json, name=composer" })
  composer?: string;

  @SpeakeasyMetadata({ data: "json, name=creationType" })
  creationType?: ScoreCreationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: ScoreLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=licenseText" })
  licenseText?: string;

  @SpeakeasyMetadata({ data: "json, name=lyricist" })
  lyricist?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: ScorePrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=sharingKey" })
  sharingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
