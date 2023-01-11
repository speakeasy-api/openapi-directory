import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessMode
/** 
 * An object defining what a not-logged-in visitor can do with the share contents
**/
export class AccessMode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modify" })
  modify?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload?: boolean;
}
