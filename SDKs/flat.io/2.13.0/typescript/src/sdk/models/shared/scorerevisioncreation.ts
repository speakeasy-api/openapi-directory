import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScoreRevisionCreationDataEncodingEnum {
    Base64 = "base64"
}


// ScoreRevisionCreation
/** 
 * A new created revision
**/
export class ScoreRevisionCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autosave" })
  autosave?: boolean;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=dataEncoding" })
  dataEncoding?: ScoreRevisionCreationDataEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
